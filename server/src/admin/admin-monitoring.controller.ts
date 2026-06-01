import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { AdminGuard } from './admin.guard';
import { AdminMonitoringService } from './admin-monitoring.service';
import { DockerStatsService } from './docker-stats.service';

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
    const [containers, host] = await Promise.all([
      this.dockerStats.getContainerStats(),
      this.dockerStats.getHostStats(),
    ]);
    return { containers, host };
  }

  @UseGuards(AdminGuard)
  @Get('admin/monitoring/container-history')
  containerHistory(@Query('container') container?: string) {
    return this.dockerStats.getContainerHistory(container ?? 'nest');
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
