#!/usr/bin/env bash
# One-time migration: copy APM tables from MySQL to PostgreSQL.
# Run on EC2 with: bash scripts/migrate-apm-data.sh
set -euo pipefail

cd /home/ubuntu/daloa

# Load env (DB_USER, DB_NAME, DB_PASS, ...)
set -a
source .env
set +a

MYSQL_ROOT_PWD="${MYSQL_ROOT_PWD:-Daloa1234!}"
MYSQL="docker exec daloa-mysql mysql -u root -p${MYSQL_ROOT_PWD} lost_ark -N -B --default-character-set=utf8mb4 -e"
# NULL 'NULL': MySQL batch mode outputs the word "NULL" for NULL values (not \N)
COPY_OPT="WITH (FORMAT text, NULL 'NULL')"
PSQL="docker exec -i daloa-postgres psql -U ${DB_USER} -d ${DB_NAME} -v ON_ERROR_STOP=1"

echo "================================================"
echo " MySQL → PostgreSQL  APM data migration"
echo "================================================"

# ── 1. apm_site_clicks ──────────────────────────────
echo "[1/5] apm_site_clicks..."
existing=$(docker exec daloa-postgres psql -U "${DB_USER}" -d "${DB_NAME}" -tAc "SELECT COUNT(*) FROM apm_site_clicks;")
if [ "$existing" -gt 0 ]; then
  echo "  already has ${existing} rows, skipping."
else
  {
    echo "COPY apm_site_clicks (site_name, site_href, site_category, device_type, created_at) FROM STDIN ${COPY_OPT};"
    ${MYSQL} "SELECT
      site_name,
      site_href,
      COALESCE(site_category, 'unknown'),
      COALESCE(device_type,   'unknown'),
      DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s+00')
    FROM apm_site_clicks ORDER BY id;"
    echo "\\."
  } | ${PSQL}
  echo "  done."
fi

# ── 2. apm_youtube_clicks ───────────────────────────
echo "[2/5] apm_youtube_clicks..."
existing=$(docker exec daloa-postgres psql -U "${DB_USER}" -d "${DB_NAME}" -tAc "SELECT COUNT(*) FROM apm_youtube_clicks;")
if [ "$existing" -gt 0 ]; then
  echo "  already has ${existing} rows, skipping."
else
  {
    echo "COPY apm_youtube_clicks (video_id, video_title, channel_title, device_type, created_at) FROM STDIN ${COPY_OPT};"
    ${MYSQL} "SELECT
      video_id,
      COALESCE(video_title,    ''),
      COALESCE(channel_title,  ''),
      COALESCE(device_type,    'unknown'),
      DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s+00')
    FROM apm_youtube_clicks ORDER BY id;"
    echo "\\."
  } | ${PSQL}
  echo "  done."
fi

# ── 3. apm_request_timings ──────────────────────────
echo "[3/5] apm_request_timings..."
{
  echo "COPY apm_request_timings (scope, name, path, method, status_code, duration_ms, created_at) FROM STDIN ${COPY_OPT};"
  ${MYSQL} "SELECT
    scope,
    name,
    path,
    method,
    status_code,
    duration_ms,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s+00')
  FROM apm_request_timings ORDER BY id;"
  echo "\\."
} | ${PSQL}
echo "  done."

# ── 4. apm_page_visits  (has UNIQUE constraint) ─────
echo "[4/5] apm_page_visits (conflict → merge visits)..."
{
  echo "CREATE TEMP TABLE tmp_page_visits (
    path         VARCHAR(255),
    device_type  TEXT,
    user_agent   VARCHAR(500),
    referrer     VARCHAR(500),
    visits       INT,
    last_seen_at TIMESTAMPTZ,
    created_at   TIMESTAMPTZ,
    country_code VARCHAR(8),
    os_name      VARCHAR(64),
    browser_name VARCHAR(64)
  );"
  echo "COPY tmp_page_visits (path, device_type, user_agent, referrer, visits, last_seen_at, created_at, country_code, os_name, browser_name) FROM STDIN ${COPY_OPT};"
  ${MYSQL} "SELECT
    path,
    COALESCE(device_type,    'unknown'),
    user_agent,
    referrer,
    visits,
    DATE_FORMAT(last_seen_at, '%Y-%m-%d %H:%i:%s+00'),
    DATE_FORMAT(created_at,   '%Y-%m-%d %H:%i:%s+00'),
    COALESCE(country_code, 'UNKNOWN'),
    COALESCE(os_name,      'Unknown'),
    COALESCE(browser_name, 'Unknown')
  FROM apm_page_visits ORDER BY id;"
  echo "\\."
  echo "INSERT INTO apm_page_visits
    (path, device_type, user_agent, referrer, visits, last_seen_at, created_at, country_code, os_name, browser_name)
  SELECT
    path,
    device_type::apm_page_visits_device_type,
    user_agent,
    referrer,
    visits,
    last_seen_at,
    created_at,
    country_code,
    os_name,
    browser_name
  FROM tmp_page_visits
  ON CONFLICT (path, device_type, country_code, os_name, browser_name)
  DO UPDATE SET
    visits       = apm_page_visits.visits + EXCLUDED.visits,
    last_seen_at = GREATEST(apm_page_visits.last_seen_at, EXCLUDED.last_seen_at);"
} | ${PSQL}
echo "  done."

# ── 5. monitoring_api_probes ────────────────────────
echo "[5/5] monitoring_api_probes..."
{
  echo "COPY monitoring_api_probes (api_key, path, method, cache_type, status_code, duration_ms, is_success, created_at) FROM STDIN ${COPY_OPT};"
  ${MYSQL} "SELECT
    api_key,
    path,
    method,
    COALESCE(cache_type, 'no-cache'),
    status_code,
    duration_ms,
    is_success,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s+00')
  FROM monitoring_api_probes ORDER BY id;"
  echo "\\."
} | ${PSQL}
echo "  done."

# ── Verify ──────────────────────────────────────────
echo ""
echo "===== Row counts after migration ====="
docker exec daloa-postgres psql -U "${DB_USER}" -d "${DB_NAME}" -c "
SELECT tbl, rows FROM (
  SELECT 'apm_site_clicks'       AS tbl, COUNT(*) AS rows FROM apm_site_clicks      UNION ALL
  SELECT 'apm_youtube_clicks'    AS tbl, COUNT(*) AS rows FROM apm_youtube_clicks    UNION ALL
  SELECT 'apm_request_timings'   AS tbl, COUNT(*) AS rows FROM apm_request_timings   UNION ALL
  SELECT 'apm_page_visits'       AS tbl, COUNT(*) AS rows FROM apm_page_visits       UNION ALL
  SELECT 'monitoring_api_probes' AS tbl, COUNT(*) AS rows FROM monitoring_api_probes
) t ORDER BY tbl;
"

echo ""
echo "Migration complete."
echo "Next: docker stop daloa-mysql && docker rm daloa-mysql"
