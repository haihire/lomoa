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

type RetentionTable =
  | 'apm_request_timings'
  | 'monitoring_api_probes'
  | 'apm_page_load_timings';

export interface PageLoadSeriesRow {
  bucket: string;
  avg_ttfb: number | null;
  avg_dcl: number | null;
  avg_lcp: number | null;
  avg_load: number | null;
  count: bigint | number;
}

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

export interface ContainerAggregateRow {
  avg_cpu: number;
  max_cpu: number;
  min_cpu: number;
  p95_cpu: number;
  avg_mem_pct: number;
  peak_mem_pct: number;
  peak_mem_used_mb: number;
  sample_count: number;
}

export interface ContainerHourlyCpuRow {
  hour: number;
  avg_cpu: number;
  max_cpu: number;
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
        visit_day DATE NOT NULL DEFAULT CURRENT_DATE,
        last_seen_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT uk_page_device_country_os_browser_day UNIQUE (path, device_type, country_code, os_name, browser_name, visit_day)
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
    // 페이지 로딩 속도(실사용자 RUM). source 컬럼은 과거 데이터 호환을 위해 유지. 지표는 NULL 허용.
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS apm_page_load_timings (
        id BIGSERIAL PRIMARY KEY,
        source VARCHAR(16) NOT NULL DEFAULT 'rum',
        path VARCHAR(255) NOT NULL DEFAULT '/',
        device_type VARCHAR(16) NOT NULL DEFAULT 'unknown',
        ttfb_ms INT,
        dcl_ms INT,
        lcp_ms INT,
        load_ms INT,
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
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_apm_page_load_timings_created_at ON apm_page_load_timings(created_at)`;
    await this.prisma
      .$executeRaw`CREATE INDEX IF NOT EXISTS idx_apm_page_load_timings_source_created_at ON apm_page_load_timings(source, created_at)`;

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
    // visit_day(방문 날짜)를 충돌 키에 포함 → 같은 방문자라도 날짜별로 행이 나뉘어
    // 일별 방문 추이가 정확해진다 (5/1·5/3 따로 집계).
    await this.prisma.$executeRaw`
      INSERT INTO apm_page_visits
        (path, device_type, user_agent, referrer, country_code, os_name, browser_name, visit_day, created_at)
      VALUES (
        ${input.path},
        ${input.deviceType}::apm_page_visits_device_type,
        ${input.userAgent},
        ${input.referrer},
        ${input.countryCode},
        ${input.osName},
        ${input.browserName},
        (NOW() AT TIME ZONE 'Asia/Seoul')::date,
        NOW()
      )
      ON CONFLICT (path, device_type, country_code, os_name, browser_name, visit_day)
      DO UPDATE SET
        visits = apm_page_visits.visits + 1,
        user_agent = EXCLUDED.user_agent,
        referrer = EXCLUDED.referrer,
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

  /** 페이지 로딩 측정값 1건 저장(실사용자 RUM). 지표는 NULL 허용. */
  async recordPageLoad(input: {
    path: string;
    deviceType: string;
    ttfbMs: number | null;
    dclMs: number | null;
    lcpMs: number | null;
    loadMs: number | null;
  }) {
    await this.prisma.$executeRaw`
      INSERT INTO apm_page_load_timings
        (source, path, device_type, ttfb_ms, dcl_ms, lcp_ms, load_ms, created_at)
      VALUES (
        'rum',
        ${input.path},
        ${input.deviceType},
        ${input.ttfbMs},
        ${input.dclMs},
        ${input.lcpMs},
        ${input.loadMs},
        NOW()
      )
    `;
  }

  /** 시간버킷 평균(ttfb/dcl/lcp/load). 빈 버킷도 채워 반환. */
  async findPageLoadSeries(rangeDays: number, bucketHours: number) {
    // 시간 단위 버킷(1일 보기)은 시각만, 일 단위 버킷(7/30일 보기)은 날짜만 표기
    const bucketFormat = bucketHours < 24 ? 'HH24:MI' : 'MM-DD';
    return this.prisma.$queryRaw<PageLoadSeriesRow[]>`
      WITH samples AS (
        SELECT
          TO_TIMESTAMP(FLOOR(EXTRACT(EPOCH FROM created_at) / (${bucketHours} * 3600)) * (${bucketHours} * 3600)) AS bucket_start,
          ttfb_ms, dcl_ms, lcp_ms, load_ms
        FROM apm_page_load_timings
        WHERE source = 'rum'
          AND created_at >= NOW() - (${rangeDays}::int * INTERVAL '1 day')
      ),
      buckets AS (
        SELECT TO_TIMESTAMP(
                 FLOOR(EXTRACT(EPOCH FROM g) / (${bucketHours} * 3600)) * (${bucketHours} * 3600)
               ) AS bucket_start
        FROM generate_series(
               NOW() - (${rangeDays}::int * INTERVAL '1 day'),
               NOW(),
               (${bucketHours} * INTERVAL '1 hour')
             ) AS g
      )
      SELECT TO_CHAR(b.bucket_start, ${bucketFormat}) AS bucket,
             ROUND(AVG(s.ttfb_ms))::int AS avg_ttfb,
             ROUND(AVG(s.dcl_ms))::int  AS avg_dcl,
             ROUND(AVG(s.lcp_ms))::int  AS avg_lcp,
             ROUND(AVG(s.load_ms))::int AS avg_load,
             COUNT(s.bucket_start) AS count
      FROM buckets b
      LEFT JOIN samples s ON s.bucket_start = b.bucket_start
      GROUP BY b.bucket_start
      ORDER BY b.bucket_start ASC
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
    // visit_day(방문 날짜)별 visits 합 = 그날 실제 방문 횟수. generate_series로 빈 날도 0.
    // 일자 경계는 한국시간(Asia/Seoul) 기준 — DB 서버 타임존(프로덕션=UTC)과 무관하게 '오늘'까지 표시.
    return this.prisma.$queryRaw<
      Array<{ bucket: string; count: bigint | number }>
    >`
      SELECT TO_CHAR(d.day, 'MM-DD') AS bucket,
             COALESCE(SUM(p.visits), 0) AS count
      FROM generate_series(
             ((NOW() AT TIME ZONE 'Asia/Seoul')::date - ((${days}::int - 1) * INTERVAL '1 day'))::date,
             (NOW() AT TIME ZONE 'Asia/Seoul')::date,
             INTERVAL '1 day'
           ) AS d(day)
      LEFT JOIN apm_page_visits p ON p.visit_day = d.day
      GROUP BY d.day
      ORDER BY d.day ASC
    `;
  }

  async findSiteClickSeriesDays(days: number) {
    // 데이터 없는 날도 0으로 채우기 (generate_series + LEFT JOIN). 일자 경계는 한국시간 기준.
    return this.prisma.$queryRaw<
      Array<{ bucket: string; count: bigint | number }>
    >`
      SELECT TO_CHAR(d.day, 'MM-DD') AS bucket,
             COUNT(c.id) AS count
      FROM generate_series(
             ((NOW() AT TIME ZONE 'Asia/Seoul')::date - ((${days}::int - 1) * INTERVAL '1 day'))::date,
             (NOW() AT TIME ZONE 'Asia/Seoul')::date,
             INTERVAL '1 day'
           ) AS d(day)
      LEFT JOIN apm_site_clicks c
        ON c.created_at >= d.day AT TIME ZONE 'Asia/Seoul'
       AND c.created_at < (d.day + INTERVAL '1 day') AT TIME ZONE 'Asia/Seoul'
      GROUP BY d.day
      ORDER BY d.day ASC
    `;
  }

  async findYoutubeClickSeriesDays(days: number) {
    // 데이터 없는 날도 0으로 채우기 (generate_series + LEFT JOIN). 일자 경계는 한국시간 기준.
    return this.prisma.$queryRaw<
      Array<{ bucket: string; count: bigint | number }>
    >`
      SELECT TO_CHAR(d.day, 'MM-DD') AS bucket,
             COUNT(c.id) AS count
      FROM generate_series(
             ((NOW() AT TIME ZONE 'Asia/Seoul')::date - ((${days}::int - 1) * INTERVAL '1 day'))::date,
             (NOW() AT TIME ZONE 'Asia/Seoul')::date,
             INTERVAL '1 day'
           ) AS d(day)
      LEFT JOIN apm_youtube_clicks c
        ON c.created_at >= d.day AT TIME ZONE 'Asia/Seoul'
       AND c.created_at < (d.day + INTERVAL '1 day') AT TIME ZONE 'Asia/Seoul'
      GROUP BY d.day
      ORDER BY d.day ASC
    `;
  }

  async findSectionSeries(bucketHours: number, rangeDays: number) {
    // 빈 시간 버킷도 채우기:
    //   buckets(시간축) × labels(api_key) 조합을 만들고 실제 데이터를 LEFT JOIN.
    //   데이터 없는 버킷은 count=0, avg_duration_ms=NULL(서비스에서 0 처리).
    //   버킷 경계는 epoch floor 방식으로 통일해 데이터 버킷과 정확히 매칭.
    return this.prisma.$queryRaw<TimedGroupRow[]>`
      WITH probe_buckets AS (
        SELECT
          TO_TIMESTAMP(FLOOR(EXTRACT(EPOCH FROM created_at) / (${bucketHours} * 3600)) * (${bucketHours} * 3600)) AS bucket_start,
          api_key,
          duration_ms
        FROM monitoring_api_probes
        WHERE created_at >= NOW() - (${rangeDays}::int * INTERVAL '1 day')
      ),
      labels AS (
        SELECT DISTINCT api_key FROM probe_buckets
      ),
      buckets AS (
        SELECT TO_TIMESTAMP(
                 FLOOR(EXTRACT(EPOCH FROM g) / (${bucketHours} * 3600)) * (${bucketHours} * 3600)
               ) AS bucket_start
        FROM generate_series(
               NOW() - (${rangeDays}::int * INTERVAL '1 day'),
               NOW(),
               (${bucketHours} * INTERVAL '1 hour')
             ) AS g
      ),
      grid AS (
        SELECT DISTINCT b.bucket_start, l.api_key
        FROM buckets b CROSS JOIN labels l
      )
      SELECT TO_CHAR(grid.bucket_start, 'MM-DD HH24:MI') AS bucket,
             grid.api_key AS label,
             ROUND(AVG(pb.duration_ms))::int AS avg_duration_ms,
             COUNT(pb.duration_ms) AS count
      FROM grid
      LEFT JOIN probe_buckets pb
        ON pb.bucket_start = grid.bucket_start AND pb.api_key = grid.api_key
      GROUP BY grid.bucket_start, grid.api_key
      ORDER BY grid.bucket_start ASC
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
      SELECT MAX(site_name) AS site_name, site_href, site_category, COUNT(*) AS click_count
      FROM apm_site_clicks
      GROUP BY site_href, site_category
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

  /** 기간 내 컨테이너 CPU/MEM 집계(평균/최대/최소/p95, 메모리 피크). */
  async findContainerAggregate(
    container: ContainerName,
    days: number,
  ): Promise<ContainerAggregateRow | undefined> {
    const table = DOCKER_TABLE[container];
    const rows = await this.prisma.$queryRawUnsafe<ContainerAggregateRow[]>(
      `SELECT
         ROUND(AVG(cpu_percent)::numeric, 2)::float AS avg_cpu,
         ROUND(MAX(cpu_percent)::numeric, 2)::float AS max_cpu,
         ROUND(MIN(cpu_percent)::numeric, 2)::float AS min_cpu,
         ROUND(
           PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY cpu_percent)::numeric, 2
         )::float AS p95_cpu,
         ROUND(AVG(mem_percent)::numeric, 2)::float AS avg_mem_pct,
         ROUND(MAX(mem_percent)::numeric, 2)::float AS peak_mem_pct,
         MAX(mem_used_mb)::int AS peak_mem_used_mb,
         COUNT(*)::int AS sample_count
       FROM ${table}
       WHERE created_at >= NOW() - ($1::int * INTERVAL '1 day')`,
      days,
    );
    return rows[0];
  }

  /** 시간대(0~23시, 한국시간)별 평균/최대 CPU — 특정 시간대 스파이크 탐지용. */
  async findContainerHourlyCpu(
    container: ContainerName,
    days: number,
  ): Promise<ContainerHourlyCpuRow[]> {
    const table = DOCKER_TABLE[container];
    return this.prisma.$queryRawUnsafe<ContainerHourlyCpuRow[]>(
      `SELECT EXTRACT(HOUR FROM created_at AT TIME ZONE 'Asia/Seoul')::int AS hour,
              ROUND(AVG(cpu_percent)::numeric, 2)::float AS avg_cpu,
              ROUND(MAX(cpu_percent)::numeric, 2)::float AS max_cpu
       FROM ${table}
       WHERE created_at >= NOW() - ($1::int * INTERVAL '1 day')
       GROUP BY 1
       ORDER BY 1`,
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
      case 'apm_page_load_timings':
        return this.deleteRowsOlderThan(
          'apm_page_load_timings',
          retentionDays,
          chunkSize,
        );
    }
  }

  private async deleteRowsOlderThan(
    table: 'apm_page_load_timings',
    retentionDays: number,
    chunkSize: number,
  ) {
    const deleted = await this.prisma.$queryRawUnsafe<Array<{ id: bigint }>>(
      `
      DELETE FROM ${table}
      WHERE id IN (
        SELECT id
        FROM ${table}
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
