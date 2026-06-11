import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { createHmac, timingSafeEqual } from 'crypto';
import { AdminGuard } from './admin.guard';
import { AdminMonitoringService } from './admin-monitoring.service';
import { DockerStatsService } from './docker-stats.service';
import {
  AiDiagnosisService,
  type AdminRole,
  type ChatMessage,
} from './ai-diagnosis.service';

@Controller('api')
export class AdminMonitoringController {
  private readonly telemetryToken = process.env.TELEMETRY_INGEST_TOKEN ?? '';
  private readonly telemetryWindowMs = 60_000;
  private readonly telemetryMaxPerWindow = 12_000;
  private telemetryWindowStartedAt = Date.now();
  private telemetryWindowCount = 0;

  constructor(
    private readonly monitoring: AdminMonitoringService,
    private readonly dockerStats: DockerStatsService,
    private readonly aiDiagnosis: AiDiagnosisService,
  ) {}

  @UseGuards(AdminGuard)
  @Get('admin/monitoring/dashboard')
  dashboard(@Query('days') days?: string, @Query('pvDays') pvDays?: string) {
    const parsed = Number(days);
    const rangeDays = Number.isFinite(parsed)
      ? Math.max(1, Math.min(30, Math.trunc(parsed)))
      : 7;
    const parsedPv = Number(pvDays);
    const pageVisitDays = Number.isFinite(parsedPv)
      ? Math.max(1, Math.min(30, Math.trunc(parsedPv)))
      : 14;
    return this.monitoring.getDashboard(rangeDays, pageVisitDays);
  }

  @UseGuards(AdminGuard)
  @Get('admin/monitoring/containers')
  async containers() {
    const [containers, host, statuses] = await Promise.all([
      this.dockerStats.getContainerStats(),
      this.dockerStats.getHostStats(),
      this.dockerStats.getContainerStatuses(),
    ]);
    return { containers, host, statuses };
  }

  @UseGuards(AdminGuard)
  @Get('admin/monitoring/container-history')
  containerHistory(@Query('container') container?: string) {
    return this.dockerStats.getContainerHistory(container ?? 'nest');
  }

  // Vercel 배포 성공 웹훅(서명 검증). next(프론트) 배포 시점을 이벤트로 기록.
  // 관리자 인증 대신 x-vercel-signature(HMAC-SHA1) 로 검증한다.
  @Post('webhooks/vercel-deploy')
  @HttpCode(HttpStatus.OK)
  async vercelDeploy(
    @Req() req: Request & { rawBody?: Buffer },
    @Headers('x-vercel-signature') signature: string | undefined,
    @Body() body: { type?: string; payload?: Record<string, unknown> },
  ) {
    const secret = process.env.VERCEL_WEBHOOK_SECRET ?? '';
    if (!secret) {
      throw new ForbiddenException('webhook이 구성되지 않았습니다');
    }
    if (!verifyVercelSignature(req.rawBody, signature, secret)) {
      throw new ForbiddenException('서명이 유효하지 않습니다');
    }
    await this.monitoring.recordNextDeployFromVercel(body);
    return { ok: true };
  }

  // 버튼 클릭 시 1회만 호출(비용 통제). 컨테이너 메트릭+EC2 정보를 LLM에 보내 진단.
  @UseGuards(AdminGuard)
  @Get('admin/monitoring/ai-diagnosis')
  getAiDiagnosis() {
    return this.aiDiagnosis.diagnose();
  }

  // 운영 챗봇. 세션 role(master/guest)을 함께 넘겨 민감 질문은 guest에게 거부 응답.
  @UseGuards(AdminGuard)
  @Post('admin/monitoring/ai-chat')
  aiChat(
    @Req() req: Request & { adminUser?: { role?: 'master' | 'guest' } },
    @Body() body: { messages?: ChatMessage[] },
  ) {
    const role: AdminRole =
      req.adminUser?.role === 'master' ? 'master' : 'guest';
    return this.aiDiagnosis.chat(body?.messages ?? [], role);
  }

  @UseGuards(AdminGuard)
  @Get('admin/monitoring/page-load-series')
  pageLoadSeries(@Query('days') days?: string) {
    const parsed = Number(days);
    const rangeDays = Number.isFinite(parsed) ? parsed : 7;
    return this.monitoring.getPageLoadSeries(rangeDays);
  }

  @Post('telemetry/page-load')
  pageLoad(
    @Req() req: Request,
    @Headers('x-telemetry-token') token: string | undefined,
    @Body()
    body: {
      path?: string;
      deviceType?: string;
      ttfb?: number;
      dcl?: number;
      lcp?: number;
      load?: number;
    },
  ) {
    this.assertTelemetryAllowed(req, token);
    const num = (v: unknown): number | null =>
      typeof v === 'number' && Number.isFinite(v) ? v : null;
    // load(또는 최소 ttfb)가 없으면 의미 없는 비콘 — 무시
    if (num(body.load) === null && num(body.ttfb) === null) {
      return { ok: false };
    }
    return this.monitoring.recordPageLoad({
      path: typeof body.path === 'string' ? body.path : '/',
      deviceType:
        typeof body.deviceType === 'string' ? body.deviceType : 'unknown',
      ttfb: num(body.ttfb),
      dcl: num(body.dcl),
      lcp: num(body.lcp),
      load: num(body.load),
    });
  }

  @Post('telemetry/page-visit')
  pageVisit(
    @Req() req: Request,
    @Headers('x-telemetry-token') token: string | undefined,
    @Body()
    body: {
      path?: string;
      deviceType?: 'mobile' | 'desktop' | 'tablet' | 'bot' | 'unknown';
      userAgent?: string;
      referrer?: string | null;
      countryCode?: string;
      osName?: string;
      browserName?: string;
    },
  ) {
    this.assertTelemetryAllowed(req, token);
    return this.monitoring.recordPageVisit({
      path: body.path ?? '/',
      deviceType: body.deviceType ?? 'unknown',
      userAgent: body.userAgent ?? '',
      referrer: body.referrer ?? null,
      countryCode: body.countryCode ?? 'UNKNOWN',
      osName: body.osName ?? 'Unknown',
      browserName: body.browserName ?? 'Unknown',
    });
  }

  @Post('telemetry/request')
  request(
    @Req() req: Request,
    @Headers('x-telemetry-token') token: string | undefined,
    @Body()
    body: {
      scope?: 'route' | 'section';
      name?: string;
      path?: string;
      method?: string;
      statusCode?: number;
      durationMs?: number;
    },
  ) {
    this.assertTelemetryAllowed(req, token);
    if (!body.name || typeof body.durationMs !== 'number') {
      return { ok: false };
    }
    return this.monitoring.recordRequest({
      scope: body.scope ?? 'route',
      name: body.name,
      path: body.path,
      method: body.method,
      statusCode: body.statusCode,
      durationMs: body.durationMs,
    });
  }

  @Post('telemetry/site-click')
  siteClick(
    @Req() req: Request,
    @Headers('x-telemetry-token') token: string | undefined,
    @Body()
    body: {
      siteName?: string;
      siteHref?: string;
      siteCategory?: string;
      deviceType?: 'mobile' | 'desktop' | 'tablet' | 'bot' | 'unknown';
    },
  ) {
    this.assertTelemetryAllowed(req, token);
    if (!body.siteHref) {
      return { ok: false };
    }
    return this.monitoring.recordSiteClick({
      siteName: body.siteName ?? body.siteHref,
      siteHref: body.siteHref,
      siteCategory: body.siteCategory ?? 'unknown',
      deviceType: body.deviceType ?? 'unknown',
    });
  }

  @Post('telemetry/youtube-click')
  youtubeClick(
    @Req() req: Request,
    @Headers('x-telemetry-token') token: string | undefined,
    @Body()
    body: {
      videoId?: string;
      videoTitle?: string;
      channelTitle?: string;
      deviceType?: 'mobile' | 'desktop' | 'tablet' | 'bot' | 'unknown';
    },
  ) {
    this.assertTelemetryAllowed(req, token);
    if (!body.videoId) {
      return { ok: false };
    }
    return this.monitoring.recordYoutubeClick({
      videoId: body.videoId,
      videoTitle: body.videoTitle ?? '',
      channelTitle: body.channelTitle ?? '',
      deviceType: body.deviceType ?? 'unknown',
    });
  }

  private assertTelemetryAllowed(req: Request, token: string | undefined) {
    if (this.telemetryToken) {
      if (!token || token !== this.telemetryToken) {
        throw new ForbiddenException('invalid telemetry token');
      }
      this.consumeTelemetryBudget();
      return;
    }

    const origin = req.headers.origin;
    const referer = req.headers.referer;
    if (!origin && !referer) {
      throw new ForbiddenException('telemetry origin missing');
    }
    this.consumeTelemetryBudget();
  }

  private consumeTelemetryBudget() {
    const now = Date.now();
    if (now - this.telemetryWindowStartedAt >= this.telemetryWindowMs) {
      this.telemetryWindowStartedAt = now;
      this.telemetryWindowCount = 0;
    }

    this.telemetryWindowCount += 1;
    if (this.telemetryWindowCount > this.telemetryMaxPerWindow) {
      throw new HttpException(
        'telemetry rate limit exceeded',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  }
}

/** Vercel 웹훅 서명(x-vercel-signature = HMAC-SHA1(rawBody, secret)) 검증. */
function verifyVercelSignature(
  rawBody: Buffer | undefined,
  signature: string | undefined,
  secret: string,
): boolean {
  if (!rawBody || !signature) return false;
  const expected = createHmac('sha1', secret).update(rawBody).digest('hex');
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}
