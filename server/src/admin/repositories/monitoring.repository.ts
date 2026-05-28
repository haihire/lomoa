import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export type DeviceType = 'mobile' | 'desktop' | 'tablet' | 'bot' | 'unknown';

export interface SummaryRow {
  total_requests: bigint | number;
  error_count: bigint | number | null;
  slow_count: bigint | number | null;
  avg_duration_ms: number | null;
  page_visits: bigint | number;
  mobile_visits: bigint | number;
  desktop_visits: bigint | number;
  tablet_visits: bigint | number;
  bot_visits: bigint | number;
}

export interface TimedGroupRow {
  bucket: string;
  label: string;
  avg_duration_ms: number | null;
  count: bigint | number;
}

export interface VisitRow {
  path: string;
  device_type: DeviceType;
  count: bigint | number;
}

export interface DimensionRow {
  name: string | null;
  count: bigint | number;
}

export interface SiteClickRow {
  site_name: string;
  site_href: string;
  site_category: string;
  click_count: bigint | number;
}

type RetentionTable = 'apm_request_timings' | 'monitoring_api_probes';

export type ContainerName = 'nest' | 'nginx' | 'redis' | 'postgres';

const DOCKER_TABLE: Record<ContainerName, string> = {
  nest: 'docker_metrics_nest',
  nginx: 'docker_metrics_nginx',
  redis: 'docker_metrics_redis',
  postgres: 'docker_metrics_postgres',
};

export interface ContainerHistoryRow {
  bucket: string;
  avg_cpu: number;
  avg_mem: number;
  avg_mem_used_mb: number;
}

@Injectable()
export class MonitoringRepository {
  constructor(private readonly prisma: PrismaService) {}

  async ensureMonitoringTables() {
    await this.prisma.$executeRaw`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'apm_page_visits_device_type') THEN
          CREATE TYPE apm_page_visits_device_type AS ENUM ('mobile', 'desktop', 'tablet', 'bot', 'unknown');
        END IF;
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'apm_request_timings_scope') THEN
          CREATE TYPE apm_request_timings_scope AS ENUM ('route', 'section');
        END IF;
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'apm_site_clicks_device_type') THEN
          CREATE TYPE apm_site_clicks_device_type AS ENUM ('mobile', 'desktop', 'tablet', 'bot', 'unknown');
        END IF;
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'apm_youtube_clicks_device_type') THEN
          CREATE TYPE apm_youtube_clicks_device_type AS ENUM ('mobile', 'desktop', 'tablet', 'bot', 'unknown');
        END IF;
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'monitoring_api_probes_cache_type') THEN
          CREATE TYPE monitoring_api_probes_cache_type AS ENUM ('redis', 'no-cache');
        END IF;
      END $$;
    `;

    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS apm_page_visits (
        id BIGSERIAL PRIMARY KEY,
        path VARCHAR(255) NOT NULL,
        device_type apm_page_visits_device_type NOT NULL DEFAULT 'unknown',
        user_agent VARCHAR(500) NOT NULL,
        referrer VARCHAR(500),
        country_code VARCHAR(8) NOT NULL DEFAULT 'UNKNOWN',
        os_name VARCHAR(64) NOT NULL DEFAULT 'Unknown',
        browser_name VARCHAR(64) NOT NULL DEFAULT 'Unknown',
        visits INT NOT NULL DEFAULT 1,
        last_seen_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT uk_page_device_country_os_browser UNIQUE (path, device_type, country_code, os_name, browser_name)
      )
    `;
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS apm_request_timings (
        id BIGSERIAL PRIMARY KEY,
        scope apm_request_timings_scope NOT NULL,
        name VARCHAR(100) NOT NULL,
        path VARCHAR(255),
        method VARCHAR(10),
        status_code INT,
        duration_ms INT NOT NULL,
        created_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS monitoring_api_probes (
        id BIGSERIAL PRIMARY KEY,
        api_key VARCHAR(100) NOT NULL,
        path VARCHAR(255) NOT NULL,
        method VARCHAR(10) NOT NULL,
        cache_type monitoring_api_probes_cache_type NOT NULL DEFAULT 'no-cache',
        status_code INT NOT NULL,
        duration_ms INT NOT NULL,
        is_success BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS apm_site_clicks (
        id BIGSERIAL PRIMARY KEY,
        site_name VARCHAR(255) NOT NULL,
        site_href VARCHAR(500) NOT NULL,
        site_category VARCHAR(100) NOT NULL DEFAULT 'unknown',
        device_type apm_site_clicks_device_type NOT NULL DEFAULT 'unknown',
        created_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS apm_youtube_clicks (
        id BIGSERIAL PRIMARY KEY,
        video_id VARCHAR(100) NOT NULL,
        video_title VARCHAR(500) NOT NULL DEFAULT '',
        channel_title VARCHAR(255) NOT NULL DEFAULT '',
        device_type apm_youtube_clicks_device_type NOT NULL DEFAULT 'unknown',
        created_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_apm_request_timings_created_at ON apm_request_timings(created_at)`;
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_apm_request_timings_scope_name ON apm_request_timings(scope, name)`;
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_monitoring_api_probes_created_at ON monitoring_api_probes(created_at)`;
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_monitoring_api_probes_api_key ON monitoring_api_probes(api_key)`;
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_apm_site_clicks_created_at ON apm_site_clicks(created_at)`;
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_apm_site_clicks_site_href ON apm_site_clicks(site_href)`;
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_apm_youtube_clicks_created_at ON apm_youtube_clicks(created_at)`;
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_apm_youtube_clicks_video_id ON apm_youtube_clicks(video_id)`;

    for (const container of Object.keys(DOCKER_TABLE) as ContainerName[]) {
      await this.prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS docker_metrics_${container} (
          id BIGSERIAL PRIMARY KEY,
          cpu_percent DECIMAL(5,2) NOT NULL,
          mem_used_mb INT NOT NULL,
          mem_total_mb INT NOT NULL,
          mem_percent DECIMAL(5,2) NOT NULL,
          created_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      `);
      await this.prisma.$executeRawUnsafe(`
        CREATE INDEX IF NOT EXISTS idx_docker_${container}_created_at
        ON docker_metrics_${container}(created_at)
      `);
    }
  }

  async recordRequest(input: {
    scope: 'route' | 'section';
    name: string;
    path?: string;
    method?: string;
    statusCode?: number;
    durationMs: number;
  }) {
    await this.prisma.$executeRaw`
      INSERT INTO apm_request_timings
        (scope, name, path, method, status_code, duration_ms, created_at)
      VALUES (
        ${input.scope}::apm_request_timings_scope,
        ${input.name},
        ${input.path ?? null},
        ${input.method ?? null},
        ${input.statusCode ?? null},
        ${Math.max(0, Math.round(input.durationMs))},
        NOW()
      )
    `;
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
    await this.prisma.$executeRaw`
      INSERT INTO apm_page_visits
        (path, device_type, user_agent, referrer, country_code, os_name, browser_name, created_at)
      VALUES (
        ${input.path},
        ${input.deviceType}::apm_page_visits_device_type,
        ${input.userAgent},
        ${input.referrer},
        ${input.countryCode},
        ${input.osName},
        ${input.browserName},
        NOW()
      )
      ON CONFLICT (path, device_type, country_code, os_name, browser_name)
      DO UPDATE SET
        visits = apm_page_visits.visits + 1,
        user_agent = EXCLUDED.user_agent,
        referrer = EXCLUDED.referrer,
        country_code = EXCLUDED.country_code,
        os_name = EXCLUDED.os_name,
        browser_name = EXCLUDED.browser_name,
        last_seen_at = NOW()
    `;
  }

  async recordSiteClick(input: {
    siteName: string;
    siteHref: string;
    siteCategory: string;
    deviceType: DeviceType;
  }) {
    await this.prisma.$executeRaw`
      INSERT INTO apm_site_clicks
        (site_name, site_href, site_category, device_type, created_at)
      VALUES (
        ${input.siteName},
        ${input.siteHref},
        ${input.siteCategory},
        ${input.deviceType}::apm_site_clicks_device_type,
        NOW()
      )
    `;
  }

  async recordYoutubeClick(input: {
    videoId: string;
    videoTitle: string;
    channelTitle: string;
    deviceType: DeviceType;
  }) {
    await this.prisma.$executeRaw`
      INSERT INTO apm_youtube_clicks
        (video_id, video_title, channel_title, device_type, created_at)
      VALUES (
        ${input.videoId},
        ${input.videoTitle},
        ${input.channelTitle},
        ${input.deviceType}::apm_youtube_clicks_device_type,
        NOW()
      )
    `;
  }

  async recordApiProbe(input: {
    apiKey: string;
    path: string;
    method: 'GET';
    cacheType: 'redis' | 'no-cache';
    statusCode: number;
    durationMs: number;
    isSuccess: boolean;
  }) {
    await this.prisma.$executeRaw`
      INSERT INTO monitoring_api_probes
        (api_key, path, method, cache_type, status_code, duration_ms, is_success, created_at)
      VALUES (
        ${input.apiKey},
        ${input.path},
        ${input.method},
        ${input.cacheType}::monitoring_api_probes_cache_type,
        ${input.statusCode},
        ${input.durationMs},
        ${input.isSuccess},
        NOW()
      )
    `;
  }

  async findSummary(slowThresholdMs: number) {
    const rows = await this.prisma.$queryRaw<SummaryRow[]>`
      SELECT
        COUNT(*) AS total_requests,
        SUM(CASE WHEN status_code >= 400 THEN 1 ELSE 0 END) AS error_count,
        SUM(CASE WHEN duration_ms >= ${slowThresholdMs} THEN 1 ELSE 0 END) AS slow_count,
        ROUND(AVG(duration_ms))::int AS avg_duration_ms,
        (SELECT COALESCE(SUM(visits), 0) FROM apm_page_visits) AS page_visits,
        (SELECT COALESCE(SUM(visits), 0) FROM apm_page_visits WHERE device_type = 'mobile') AS mobile_visits,
        (SELECT COALESCE(SUM(visits), 0) FROM apm_page_visits WHERE device_type = 'desktop') AS desktop_visits,
        (SELECT COALESCE(SUM(visits), 0) FROM apm_page_visits WHERE device_type = 'tablet') AS tablet_visits,
        (SELECT COALESCE(SUM(visits), 0) FROM apm_page_visits WHERE device_type = 'bot') AS bot_visits
      FROM apm_request_timings
      WHERE created_at >= NOW() - INTERVAL '1 hour'
    `;
    return rows[0];
  }

  async findPageVisitSeriesDays(days: number) {
    return this.prisma.$queryRaw<
      Array<{ bucket: string; count: bigint | number }>
    >`
      SELECT TO_CHAR(DATE(last_seen_at), 'MM-DD') AS bucket,
             COUNT(*) AS count
      FROM apm_page_visits
      WHERE last_seen_at >= NOW() - (${days}::int * INTERVAL '1 day')
      GROUP BY DATE(last_seen_at)
      ORDER BY DATE(last_seen_at) ASC
    `;
  }

  async findSiteClickSeriesDays(days: number) {
    return this.prisma.$queryRaw<
      Array<{ bucket: string; count: bigint | number }>
    >`
      SELECT TO_CHAR(day_key, 'MM-DD') AS bucket,
             COUNT(*) AS count
      FROM (
        SELECT DATE(created_at) AS day_key
        FROM apm_site_clicks
        WHERE created_at >= NOW() - (${days}::int * INTERVAL '1 day')
      ) AS site_click_days
      GROUP BY day_key
      ORDER BY day_key ASC
    `;
  }

  async findYoutubeClickSeriesDays(days: number) {
    return this.prisma.$queryRaw<
      Array<{ bucket: string; count: bigint | number }>
    >`
      SELECT TO_CHAR(day_key, 'MM-DD') AS bucket,
             COUNT(*) AS count
      FROM (
        SELECT DATE(created_at) AS day_key
        FROM apm_youtube_clicks
        WHERE created_at >= NOW() - (${days}::int * INTERVAL '1 day')
      ) AS youtube_click_days
      GROUP BY day_key
      ORDER BY day_key ASC
    `;
  }

  async findSectionSeries(bucketHours: number, rangeDays: number) {
    return this.prisma.$queryRaw<TimedGroupRow[]>`
      SELECT TO_CHAR(bucket_start, 'MM-DD HH24:MI') AS bucket,
             api_key AS label,
             ROUND(AVG(duration_ms))::int AS avg_duration_ms,
             COUNT(*) AS count
      FROM (
        SELECT
          TO_TIMESTAMP(FLOOR(EXTRACT(EPOCH FROM created_at) / (${bucketHours} * 3600)) * (${bucketHours} * 3600)) AS bucket_start,
          api_key,
          duration_ms
        FROM monitoring_api_probes
        WHERE created_at >= NOW() - (${rangeDays}::int * INTERVAL '1 day')
      ) AS probe_buckets
      GROUP BY bucket_start, api_key
      ORDER BY bucket_start ASC
    `;
  }

  async findPageVisits() {
    return this.prisma.$queryRaw<VisitRow[]>`
      SELECT path, device_type, SUM(visits) AS count
      FROM apm_page_visits
      WHERE created_at >= NOW() - INTERVAL '24 hours'
      GROUP BY path, device_type
      ORDER BY count DESC
      LIMIT 20
    `;
  }

  async findCountryVisits() {
    return this.findDimensionRows('country_code');
  }

  async findOsVisits() {
    return this.findDimensionRows('os_name');
  }

  async findBrowserVisits() {
    return this.findDimensionRows('browser_name');
  }

  async findYoutubeClickTotal(): Promise<number> {
    const rows = await this.prisma.$queryRaw<Array<{ total: bigint | number }>>`
      SELECT COUNT(*) AS total FROM apm_youtube_clicks
    `;
    return Number(rows[0]?.total ?? 0);
  }

  async findSiteClicks() {
    return this.prisma.$queryRaw<SiteClickRow[]>`
      SELECT site_name, site_href, site_category, COUNT(*) AS click_count
      FROM apm_site_clicks
      GROUP BY site_name, site_href, site_category
      ORDER BY click_count DESC
      LIMIT 20
    `;
  }

  async saveDockerMetric(
    container: ContainerName,
    input: {
      cpuPercent: number;
      memUsedMb: number;
      memTotalMb: number;
      memPercent: number;
    },
  ): Promise<void> {
    const table = DOCKER_TABLE[container];
    await this.prisma.$executeRawUnsafe(
      `INSERT INTO ${table} (cpu_percent, mem_used_mb, mem_total_mb, mem_percent, created_at)
       VALUES ($1::numeric, $2::numeric::int, $3::numeric::int, $4::numeric, NOW())`,
      input.cpuPercent,
      input.memUsedMb,
      input.memTotalMb,
      input.memPercent,
    );
  }

  async findDockerMetricSeries(
    container: ContainerName,
    days: number,
  ): Promise<ContainerHistoryRow[]> {
    const table = DOCKER_TABLE[container];
    return this.prisma.$queryRawUnsafe<ContainerHistoryRow[]>(
      `SELECT TO_CHAR(DATE_TRUNC('hour', created_at), 'MM-DD HH24:MI') AS bucket,
              ROUND(AVG(cpu_percent)::numeric, 2)::float AS avg_cpu,
              ROUND(AVG(mem_percent)::numeric, 2)::float AS avg_mem,
              ROUND(AVG(mem_used_mb))::int AS avg_mem_used_mb
       FROM ${table}
       WHERE created_at >= NOW() - ($1::int * INTERVAL '1 day')
       GROUP BY DATE_TRUNC('hour', created_at)
       ORDER BY DATE_TRUNC('hour', created_at) ASC`,
      days,
    );
  }

  async deleteDockerMetricsOlderThan(
    container: ContainerName,
    retentionDays: number,
  ): Promise<void> {
    const table = DOCKER_TABLE[container];
    await this.prisma.$executeRawUnsafe(
      `DELETE FROM ${table} WHERE created_at < NOW() - ($1::int * INTERVAL '1 day')`,
      retentionDays,
    );
  }

  async deleteMetricRowsOlderThan(
    tableName: RetentionTable,
    retentionDays: number,
  ) {
    const chunkSize = 5000;
    const maxBatches = 200;
    let totalDeleted = 0;

    for (let batch = 1; batch <= maxBatches; batch += 1) {
      const deleted = await this.deleteMetricRowsOlderThanFrom(
        tableName,
        retentionDays,
        chunkSize,
      );
      totalDeleted += deleted;

      if (deleted < chunkSize) return totalDeleted;
      await sleep(25);
    }

    return totalDeleted;
  }

  private async deleteMetricRowsOlderThanFrom(
    tableName: RetentionTable,
    retentionDays: number,
    chunkSize: number,
  ) {
    switch (tableName) {
      case 'apm_request_timings':
        return this.deleteRequestTimingRowsOlderThan(retentionDays, chunkSize);
      case 'monitoring_api_probes':
        return this.deleteApiProbeRowsOlderThan(retentionDays, chunkSize);
    }
  }

  private async findDimensionRows(
    columnName: 'country_code' | 'os_name' | 'browser_name',
  ) {
    return this.prisma.$queryRawUnsafe<DimensionRow[]>(
      `
      SELECT ${columnName} AS name, SUM(visits) AS count
      FROM apm_page_visits
      GROUP BY ${columnName}
      ORDER BY count DESC
      LIMIT 20
      `,
    );
  }

  private async deleteRequestTimingRowsOlderThan(
    retentionDays: number,
    chunkSize: number,
  ) {
    const deleted = await this.prisma.$queryRawUnsafe<Array<{ id: bigint }>>(
      `
      DELETE FROM apm_request_timings
      WHERE id IN (
        SELECT id
        FROM apm_request_timings
        WHERE created_at < NOW() - ($1::int * INTERVAL '1 day')
        ORDER BY id ASC
        LIMIT $2
      )
      RETURNING id
      `,
      retentionDays,
      chunkSize,
    );
    return deleted.length;
  }

  private async deleteApiProbeRowsOlderThan(
    retentionDays: number,
    chunkSize: number,
  ) {
    const deleted = await this.prisma.$queryRawUnsafe<Array<{ id: bigint }>>(
      `
      DELETE FROM monitoring_api_probes
      WHERE id IN (
        SELECT id
        FROM monitoring_api_probes
        WHERE created_at < NOW() - ($1::int * INTERVAL '1 day')
        ORDER BY id ASC
        LIMIT $2
      )
      RETURNING id
      `,
      retentionDays,
      chunkSize,
    );
    return deleted.length;
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
