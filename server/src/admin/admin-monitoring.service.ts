import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as os from 'os';
import {
  type DeviceType,
  type VisitRow,
  MonitoringRepository,
} from './repositories/monitoring.repository';

export interface CurrentSystemSnapshot {
  at: string;
  cpuPercent: number;
  memoryPercent: number;
  rssMb: number;
  heapUsedMb: number;
  heapTotalMb: number;
  totalMemMb: number;
  loadAvg1m: number;
}

export interface AdminMonitoringDashboard {
  summary: {
    windowMinutes: number;
    totalRequests: number;
    errorCount: number;
    errorRate: number;
    slowCount: number;
    slowThresholdMs: number;
    avgDurationMs: number;
    p95DurationMs: number;
    p99DurationMs: number;
    pageVisits: number;
    deviceCounts: {
      mobile: number;
      desktop: number;
      tablet: number;
      bot: number;
    };
    latestSystem: {
      created_at: string;
      cpu_percent: number;
      memory_percent: number;
      rss_mb: number;
      heap_used_mb: number;
      total_mem_mb: number;
    } | null;
  };
  requestSeries: Array<{
    minute: string;
    avgDurationMs: number;
    count: number;
  }>;
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
  systemSeries: Array<{
    at: string;
    cpuPercent: number;
    memoryPercent: number;
    rssMb: number;
    heapUsedMb: number;
    totalMemMb: number;
  }>;
  slowRequests: Array<{
    path: string;
    method: string;
    status_code: number;
    duration_ms: number;
    created_at: string;
  }>;
  apiStats: Array<{
    path: string;
    method: string;
    requestCount: number;
    avgDurationMs: number;
    level: 'low' | 'near' | 'high';
    levelLabel: 'low' | 'near' | 'high';
  }>;
  probeStats: Array<{
    apiKey: string;
    path: string;
    method: string;
    cacheType: 'redis' | 'no-cache';
    requestCount: number;
    avgDurationMs: number;
    maxDurationMs: number;
    lastDurationMs: number;
    lastStatusCode: number;
    lastSuccess: boolean;
  }>;
  siteClicks: Array<{
    siteName: string;
    siteHref: string;
    siteCategory: string;
    clickCount: number;
  }>;
}

@Injectable()
export class AdminMonitoringService implements OnModuleInit {
  private readonly logger = new Logger(AdminMonitoringService.name);
  private readonly SLOW_THRESHOLD_MS = 1200;
  private readonly SYSTEM_METRIC_RETENTION_DAYS = 7;
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
  private lastCpuUsage = process.cpuUsage();
  private lastSampleAt = Date.now();

  constructor(private readonly monitoringRepo: MonitoringRepository) {}

  async onModuleInit() {
    await this.monitoringRepo.ensureMonitoringTables();
    await this.recordSystemSnapshot();
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

  async recordSystemSnapshot() {
    const snapshot = this.buildSystemSnapshot();
    this.lastCpuUsage = snapshot.cpuNow;
    this.lastSampleAt = snapshot.now;
    await this.monitoringRepo.recordSystemMetric({
      cpuPercent: Number(snapshot.cpuPercent.toFixed(1)),
      memoryPercent: Number(snapshot.memoryPercent.toFixed(1)),
      rssMb: snapshot.rssMb,
      heapUsedMb: snapshot.heapUsedMb,
      totalMemMb: snapshot.totalMemMb,
      loadAvg1m: Number(snapshot.loadAvg1m.toFixed(2)),
    });
  }

  async getCurrentSystemSnapshot(): Promise<CurrentSystemSnapshot> {
    const latest = await this.monitoringRepo.findLatestSystemMetric();

    if (latest) {
      return {
        at: latest.created_at.toISOString(),
        cpuPercent: Number(latest.cpu_percent),
        memoryPercent: Number(latest.memory_percent),
        rssMb: latest.rss_mb,
        heapUsedMb: latest.heap_used_mb,
        heapTotalMb: 0,
        totalMemMb: latest.total_mem_mb,
        loadAvg1m: Number(latest.load_avg_1m),
      };
    }

    const snapshot = this.buildSystemSnapshot();
    return {
      at: new Date(snapshot.now).toISOString(),
      cpuPercent: Number(snapshot.cpuPercent.toFixed(1)),
      memoryPercent: Number(snapshot.memoryPercent.toFixed(1)),
      rssMb: snapshot.rssMb,
      heapUsedMb: snapshot.heapUsedMb,
      heapTotalMb: snapshot.heapTotalMb,
      totalMemMb: snapshot.totalMemMb,
      loadAvg1m: Number(snapshot.loadAvg1m.toFixed(2)),
    };
  }

  private buildSystemSnapshot() {
    const now = Date.now();
    const elapsedMs = Math.max(1, now - this.lastSampleAt);
    const cpuNow = process.cpuUsage();
    const cpuDeltaUs =
      cpuNow.user -
      this.lastCpuUsage.user +
      (cpuNow.system - this.lastCpuUsage.system);
    // Use process CPU utilization over elapsed wall time.
    // This is more intuitive for app monitoring than dividing by host core count.
    const cpuPercent = Math.min(
      100,
      Math.max(0, (cpuDeltaUs / 1000 / elapsedMs) * 100),
    );
    const mem = process.memoryUsage();
    const totalMemMb = Math.round(os.totalmem() / 1024 / 1024);
    const rssMb = Math.round(mem.rss / 1024 / 1024);
    const heapUsedMb = Math.round(mem.heapUsed / 1024 / 1024);
    const heapTotalMb = Math.round(mem.heapTotal / 1024 / 1024);
    const memoryPercent = totalMemMb
      ? Math.min(100, Math.max(0, (rssMb / totalMemMb) * 100))
      : 0;
    const loadAvg1m = os.loadavg()[0] ?? 0;
    return {
      now,
      cpuNow,
      cpuPercent,
      memoryPercent,
      rssMb,
      heapUsedMb,
      heapTotalMb,
      totalMemMb,
      loadAvg1m,
    };
  }

  @Cron('*/5 * * * * *')
  async sampleSystem() {
    await this.recordSystemSnapshot().catch((err: unknown) =>
      this.logger.warn(`system sample failed: ${toErrorMessage(err)}`),
    );
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

  @Cron('0 0 3 * * *')
  async cleanupMetricRetention() {
    try {
      const deletedSystem = await this.monitoringRepo.deleteMetricRowsOlderThan(
        'apm_system_metrics',
        this.SYSTEM_METRIC_RETENTION_DAYS,
      );
      const deletedRequests =
        await this.monitoringRepo.deleteMetricRowsOlderThan(
          'apm_request_timings',
          this.MONITORING_METRIC_RETENTION_DAYS,
        );
      const deletedProbes = await this.monitoringRepo.deleteMetricRowsOlderThan(
        'monitoring_api_probes',
        this.MONITORING_METRIC_RETENTION_DAYS,
      );

      this.logger.log(
        `monitoring retention cleanup completed: system=${deletedSystem}, requests=${deletedRequests}, probes=${deletedProbes}`,
      );
    } catch (err: unknown) {
      this.logger.warn(
        `monitoring retention cleanup failed: ${toErrorMessage(err)}`,
      );
    }
  }

  async getDashboard(rangeDays = 7): Promise<AdminMonitoringDashboard> {
    const safeRangeDays = Math.max(1, Math.min(30, Math.trunc(rangeDays)));
    const bucketHours =
      safeRangeDays === 1
        ? 1
        : safeRangeDays === 3
          ? 3
          : safeRangeDays === 7
            ? 7
            : 30;
    const summary = await this.monitoringRepo.findSummary(
      this.SLOW_THRESHOLD_MS,
    );

    const durationRows = await this.monitoringRepo.findRecentDurations();
    const durations = durationRows.map((r) => r.duration_ms);
    const p95DurationMs = this.percentileFromSorted(durations, 0.95);
    const p99DurationMs = this.percentileFromSorted(durations, 0.99);

    const requestSeries = await this.monitoringRepo.findRequestSeries();

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

    const systemRows = await this.monitoringRepo.findSystemSeriesSince(
      new Date(Date.now() - 60 * 60 * 1000),
    );

    const slowRows = await this.monitoringRepo.findSlowRequests(
      this.SLOW_THRESHOLD_MS,
    );

    const latestSystemRow = await this.monitoringRepo.findLatestSystemMetric();

    const apiRows = await this.monitoringRepo.findApiStats();
    const probeRows = await this.monitoringRepo.findProbeStats();
    const siteClickRows = await this.monitoringRepo.findSiteClicks();

    const latestSystem = latestSystemRow
      ? {
          created_at: latestSystemRow.created_at.toISOString(),
          cpu_percent: Number(latestSystemRow.cpu_percent),
          memory_percent: Number(latestSystemRow.memory_percent),
          rss_mb: latestSystemRow.rss_mb,
          heap_used_mb: latestSystemRow.heap_used_mb,
          total_mem_mb: latestSystemRow.total_mem_mb,
        }
      : null;

    return {
      summary: {
        windowMinutes: 60,
        totalRequests: Number(summary?.total_requests ?? 0),
        errorCount: Number(summary?.error_count ?? 0),
        errorRate:
          summary && Number(summary.total_requests) > 0
            ? Number(
                (
                  Number(summary.error_count ?? 0) /
                  Number(summary.total_requests)
                ).toFixed(3),
              )
            : 0,
        slowCount: Number(summary?.slow_count ?? 0),
        slowThresholdMs: this.SLOW_THRESHOLD_MS,
        avgDurationMs: summary?.avg_duration_ms ?? 0,
        p95DurationMs,
        p99DurationMs,
        pageVisits: Number(summary?.page_visits ?? 0),
        deviceCounts: {
          mobile: Number(summary?.mobile_visits ?? 0),
          desktop: Number(summary?.desktop_visits ?? 0),
          tablet: Number(summary?.tablet_visits ?? 0),
          bot: Number(summary?.bot_visits ?? 0),
        },
        latestSystem,
      },
      requestSeries: requestSeries.map((row) => ({
        minute: row.bucket,
        avgDurationMs: row.avg_duration_ms ?? 0,
        count: Number(row.count),
      })),
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
      systemSeries: systemRows.map((row) => ({
        at: row.created_at.toISOString(),
        cpuPercent: Number(row.cpu_percent),
        memoryPercent: Number(row.memory_percent),
        rssMb: row.rss_mb,
        heapUsedMb: row.heap_used_mb,
        totalMemMb: row.total_mem_mb,
      })),
      slowRequests: slowRows.map((row) => ({
        path: row.path ?? '',
        method: row.method ?? '',
        status_code: row.status_code ?? 0,
        duration_ms: row.duration_ms,
        created_at: row.created_at.toISOString(),
      })),
      apiStats: apiRows.map((row) => {
        const avg = row.avg_duration_ms ?? 0;
        const level: 'low' | 'near' | 'high' =
          avg >= 800 ? 'high' : avg >= 300 ? 'near' : 'low';
        return {
          path: row.path,
          method: row.method,
          requestCount: Number(row.request_count),
          avgDurationMs: avg,
          level,
          levelLabel: level,
        };
      }),
      probeStats: probeRows.map((row) => ({
        apiKey: row.api_key,
        path: row.path,
        method: row.method,
        cacheType: row.cache_type,
        requestCount: Number(row.request_count),
        avgDurationMs: row.avg_duration_ms ?? 0,
        maxDurationMs: row.max_duration_ms ?? 0,
        lastDurationMs: Number(row.last_duration_ms ?? 0),
        lastStatusCode: Number(row.last_status_code ?? 0),
        lastSuccess: Boolean(row.last_success),
      })),
      siteClicks: siteClickRows.map((row) => ({
        siteName: row.site_name,
        siteHref: row.site_href,
        siteCategory: row.site_category,
        clickCount: Number(row.click_count),
      })),
    };
  }

  private percentileFromSorted(values: number[], p: number): number {
    if (values.length === 0) return 0;
    const index = Math.min(
      values.length - 1,
      Math.max(0, Math.ceil(values.length * p) - 1),
    );
    return values[index] ?? 0;
  }
}

function toErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
