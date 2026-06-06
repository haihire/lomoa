import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as http from 'http';
import * as https from 'https';
import {
  type DeviceType,
  type PageLoadSource,
  type VisitRow,
  MonitoringRepository,
} from './repositories/monitoring.repository';

export interface AdminMonitoringDashboard {
  summary: {
    windowMinutes: number;
    avgDurationMs: number;
    pageVisits: number;
    deviceCounts: {
      mobile: number;
      desktop: number;
      tablet: number;
      bot: number;
    };
  };
  siteClickSeries: Array<{ minute: string; count: number }>;
  youtubeClickSeries: Array<{ minute: string; count: number }>;
  sectionSeries: Array<{
    minute: string;
    label: string;
    avgDurationMs: number;
    count: number;
  }>;
  pageVisits: VisitRow[];
  countryVisits: Array<{ countryCode: string; count: number }>;
  osVisits: Array<{ osName: string; count: number }>;
  browserVisits: Array<{ browserName: string; count: number }>;
  siteClicks: Array<{
    siteName: string;
    siteHref: string;
    siteCategory: string;
    clickCount: number;
  }>;
  pageVisitSeries: Array<{ day: string; count: number }>;
  youtubeClickTotal: number;
}

@Injectable()
export class AdminMonitoringService implements OnModuleInit {
  private readonly logger = new Logger(AdminMonitoringService.name);
  private readonly SLOW_THRESHOLD_MS = 1200;
  private readonly MONITORING_METRIC_RETENTION_DAYS = 30;
  private readonly probeTargets: Array<{
    apiKey: string;
    path: string;
    method: 'GET';
    cacheType: 'redis' | 'no-cache';
  }> = [
    {
      apiKey: 'sites',
      path: '/api/sites',
      method: 'GET',
      cacheType: 'no-cache',
    },
    {
      apiKey: 'stat-builds',
      path: '/api/characters/stat-builds',
      method: 'GET',
      cacheType: 'redis',
    },
    {
      apiKey: 'youtube',
      path: '/api/streamers/popular?offset=0&limit=8',
      method: 'GET',
      cacheType: 'redis',
    },
  ];
  constructor(private readonly monitoringRepo: MonitoringRepository) {}

  async onModuleInit() {
    await this.monitoringRepo.ensureMonitoringTables();
  }

  async recordRequest(input: {
    scope: 'route' | 'section';
    name: string;
    path?: string;
    method?: string;
    statusCode?: number;
    durationMs: number;
  }) {
    await this.monitoringRepo.recordRequest(input);
  }

  async recordPageVisit(input: {
    path: string;
    deviceType: DeviceType;
    userAgent: string;
    referrer: string | null;
    countryCode: string;
    osName: string;
    browserName: string;
  }) {
    await this.monitoringRepo.recordPageVisit(input);
  }

  async recordSiteClick(input: {
    siteName: string;
    siteHref: string;
    siteCategory: string;
    deviceType: DeviceType;
  }) {
    await this.monitoringRepo.recordSiteClick(input);
  }

  async recordYoutubeClick(input: {
    videoId: string;
    videoTitle: string;
    channelTitle: string;
    deviceType: DeviceType;
  }) {
    await this.monitoringRepo.recordYoutubeClick(input);
  }

  /** RUM(실사용자) 페이지 로딩 측정값 기록. 값은 0~600000ms로 클램프, 비정상은 null. */
  async recordPageLoad(input: {
    path: string;
    deviceType: string;
    ttfb: number | null;
    dcl: number | null;
    lcp: number | null;
    load: number | null;
  }) {
    const clamp = (v: number | null): number | null =>
      typeof v === 'number' && Number.isFinite(v) && v >= 0
        ? Math.min(600_000, Math.round(v))
        : null;
    await this.monitoringRepo.recordPageLoad({
      source: 'rum',
      path: input.path.slice(0, 255) || '/',
      deviceType: input.deviceType.slice(0, 16) || 'unknown',
      ttfbMs: clamp(input.ttfb),
      dclMs: clamp(input.dcl),
      lcpMs: clamp(input.lcp),
      loadMs: clamp(input.load),
    });
  }

  /** source별 페이지 로딩 추이. days에 따라 버킷 크기 자동 선택. */
  async getPageLoadSeries(source: PageLoadSource, days: number) {
    const safeDays = Math.max(1, Math.min(30, Math.trunc(days)));
    const bucketHours = safeDays <= 1 ? 1 : safeDays <= 7 ? 6 : 24;
    const rows = await this.monitoringRepo.findPageLoadSeries(
      source,
      safeDays,
      bucketHours,
    );
    return rows.map((row) => ({
      bucket: row.bucket,
      ttfb: row.avg_ttfb ?? null,
      dcl: row.avg_dcl ?? null,
      lcp: row.avg_lcp ?? null,
      load: row.avg_load ?? null,
      count: Number(row.count),
    }));
  }

  @Cron('0 */10 * * * *')
  async probeApis() {
    const base =
      process.env.MONITORING_PROBE_BASE_URL ??
      `http://127.0.0.1:${process.env.PORT ?? 3001}`;
    for (const target of this.probeTargets) {
      const started = process.hrtime.bigint();
      let statusCode = 0;
      let success = false;
      try {
        const res = await fetch(`${base}${target.path}`, {
          method: target.method,
          cache: 'no-store',
        });
        statusCode = res.status;
        success = res.ok;
      } catch {
        statusCode = 0;
        success = false;
      }
      const durationMs = Math.max(
        0,
        Math.round(Number(process.hrtime.bigint() - started) / 1_000_000),
      );
      await this.monitoringRepo.recordApiProbe({
        apiKey: target.apiKey,
        path: target.path,
        method: target.method,
        cacheType: target.cacheType,
        statusCode,
        durationMs,
        isSuccess: success,
      });
    }
  }

  /** 메인페이지 HTML 문서를 받아 TTFB/문서완료 시간을 합성 측정해 기록(10분). */
  @Cron('0 */10 * * * *')
  async probeMainPage() {
    const url = process.env.MONITORING_MAINPAGE_URL ?? 'https://www.daloa.kr/';
    try {
      const { ttfbMs, loadMs } = await this.measureDocument(url);
      await this.monitoringRepo.recordPageLoad({
        source: 'synthetic',
        path: '/',
        deviceType: 'server',
        ttfbMs,
        dclMs: null,
        lcpMs: null,
        loadMs,
      });
    } catch (err: unknown) {
      this.logger.warn(`mainpage probe failed: ${toErrorMessage(err)}`);
    }
  }

  /** HTML 문서 1건을 받아 TTFB(헤더 수신)·문서 완료 시간을 ms로 측정. */
  private measureDocument(
    url: string,
  ): Promise<{ ttfbMs: number; loadMs: number }> {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https:') ? https : http;
      const startedAt = process.hrtime.bigint();
      const elapsed = () =>
        Math.round(Number(process.hrtime.bigint() - startedAt) / 1_000_000);

      const req = client.get(url, { timeout: 15_000 }, (res) => {
        const status = res.statusCode ?? 0;
        // 2xx만 정상 측정 — 3xx/4xx/5xx의 작은 응답이 평균을 왜곡하지 않도록 실패 처리
        if (status < 200 || status >= 300) {
          res.resume();
          req.destroy(new Error(`probe status ${status}`));
          return;
        }
        const ttfbMs = elapsed();
        res.on('data', () => undefined); // 본문 소비
        res.on('end', () => resolve({ ttfbMs, loadMs: elapsed() }));
        res.on('error', reject);
      });
      req.on('timeout', () => req.destroy(new Error('probe timeout')));
      req.on('error', reject);
    });
  }

  @Cron('0 0 3 * * *')
  async cleanupMetricRetention() {
    try {
      const deletedRequests =
        await this.monitoringRepo.deleteMetricRowsOlderThan(
          'apm_request_timings',
          this.MONITORING_METRIC_RETENTION_DAYS,
        );
      const deletedProbes = await this.monitoringRepo.deleteMetricRowsOlderThan(
        'monitoring_api_probes',
        this.MONITORING_METRIC_RETENTION_DAYS,
      );
      const deletedPageLoads =
        await this.monitoringRepo.deleteMetricRowsOlderThan(
          'apm_page_load_timings',
          this.MONITORING_METRIC_RETENTION_DAYS,
        );

      this.logger.log(
        `monitoring retention cleanup completed: requests=${deletedRequests}, probes=${deletedProbes}, pageLoads=${deletedPageLoads}`,
      );
    } catch (err: unknown) {
      this.logger.warn(
        `monitoring retention cleanup failed: ${toErrorMessage(err)}`,
      );
    }
  }

  async getDashboard(
    rangeDays = 7,
    pvDays = 14,
  ): Promise<AdminMonitoringDashboard> {
    const safeRangeDays = Math.max(1, Math.min(30, Math.trunc(rangeDays)));
    const bucketHours =
      safeRangeDays === 1
        ? 1
        : safeRangeDays === 3
          ? 3
          : safeRangeDays === 7
            ? 7
            : safeRangeDays === 10
              ? 12
              : 30;
    const summary = await this.monitoringRepo.findSummary(
      this.SLOW_THRESHOLD_MS,
    );

    const siteClickSeriesRows =
      await this.monitoringRepo.findSiteClickSeriesDays(14);

    const youtubeClickSeriesRows =
      await this.monitoringRepo.findYoutubeClickSeriesDays(14);

    const sectionSeries = await this.monitoringRepo.findSectionSeries(
      bucketHours,
      safeRangeDays,
    );

    const visitRows = await this.monitoringRepo.findPageVisits();
    const countryRows = await this.monitoringRepo.findCountryVisits();
    const osRows = await this.monitoringRepo.findOsVisits();
    const browserRows = await this.monitoringRepo.findBrowserVisits();

    const siteClickRows = await this.monitoringRepo.findSiteClicks();
    const safePvDays = Math.max(1, Math.min(30, Math.trunc(pvDays)));
    const [pageVisitSeriesRows, youtubeClickTotal] = await Promise.all([
      this.monitoringRepo.findPageVisitSeriesDays(safePvDays),
      this.monitoringRepo.findYoutubeClickTotal(),
    ]);

    return {
      summary: {
        windowMinutes: 60,
        avgDurationMs: summary?.avg_duration_ms ?? 0,
        pageVisits: Number(summary?.page_visits ?? 0),
        deviceCounts: {
          mobile: Number(summary?.mobile_visits ?? 0),
          desktop: Number(summary?.desktop_visits ?? 0),
          tablet: Number(summary?.tablet_visits ?? 0),
          bot: Number(summary?.bot_visits ?? 0),
        },
      },
      siteClickSeries: siteClickSeriesRows.map((row) => ({
        minute: row.bucket,
        count: Number(row.count),
      })),
      youtubeClickSeries: youtubeClickSeriesRows.map((row) => ({
        minute: row.bucket,
        count: Number(row.count),
      })),
      sectionSeries: sectionSeries.map((row) => ({
        minute: row.bucket,
        label: row.label,
        avgDurationMs: row.avg_duration_ms ?? 0,
        count: Number(row.count),
      })),
      pageVisits: visitRows.map((row) => ({
        ...row,
        count: Number(row.count),
      })) as VisitRow[],
      countryVisits: countryRows.map((row) => ({
        countryCode: row.name || 'UNKNOWN',
        count: Number(row.count),
      })),
      osVisits: osRows.map((row) => ({
        osName: row.name || 'Unknown',
        count: Number(row.count),
      })),
      browserVisits: browserRows.map((row) => ({
        browserName: row.name || 'Unknown',
        count: Number(row.count),
      })),
      siteClicks: siteClickRows.map((row) => ({
        siteName: row.site_name,
        siteHref: row.site_href,
        siteCategory: row.site_category,
        clickCount: Number(row.click_count),
      })),
      pageVisitSeries: pageVisitSeriesRows.map((row) => ({
        day: row.bucket,
        count: Number(row.count),
      })),
      youtubeClickTotal,
    };
  }
}

function toErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
