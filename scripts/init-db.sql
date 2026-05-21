CREATE TYPE admin_users_role AS ENUM ('master', 'guest');
CREATE TYPE apm_page_visits_device_type AS ENUM ('mobile', 'desktop', 'tablet', 'bot', 'unknown');
CREATE TYPE apm_request_timings_scope AS ENUM ('route', 'section');
CREATE TYPE apm_site_clicks_device_type AS ENUM ('mobile', 'desktop', 'tablet', 'bot', 'unknown');
CREATE TYPE apm_youtube_clicks_device_type AS ENUM ('mobile', 'desktop', 'tablet', 'bot', 'unknown');
CREATE TYPE monitoring_api_probes_cache_type AS ENUM ('redis', 'no-cache');

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role admin_users_role NOT NULL DEFAULT 'guest',
  created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS loa_class (
  idx SERIAL PRIMARY KEY,
  class_engraving VARCHAR(50),
  class_root VARCHAR(50),
  gender VARCHAR(50),
  class_detail VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS loa_ark_grid (
  seq SERIAL PRIMARY KEY,
  core VARCHAR(50),
  star VARCHAR(50),
  class INT,
  "order" INT,
  CONSTRAINT fk_loa_ark_grid_class FOREIGN KEY (class)
    REFERENCES loa_class(idx) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_loa_ark_grid_class ON loa_ark_grid(class);

CREATE TABLE IF NOT EXISTS loa_users (
  seq SERIAL PRIMARY KEY,
  server VARCHAR(50),
  level DOUBLE PRECISION,
  combat_power DECIMAL(10, 2),
  class INT,
  thesix INT,
  name VARCHAR(50) UNIQUE,
  expedition_key VARCHAR(100),
  core_sun INT,
  core_moon INT,
  core_star INT,
  stat_crit INT NOT NULL DEFAULT 0,
  stat_spec INT NOT NULL DEFAULT 0,
  stat_swift INT NOT NULL DEFAULT 0,
  stat_build VARCHAR(10),
  CONSTRAINT fk_users_class FOREIGN KEY (class)
    REFERENCES loa_class(idx) ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT core_suns FOREIGN KEY (core_sun)
    REFERENCES loa_ark_grid(seq) ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT core_moons FOREIGN KEY (core_moon)
    REFERENCES loa_ark_grid(seq) ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT core_stars FOREIGN KEY (core_star)
    REFERENCES loa_ark_grid(seq) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_loa_users_class ON loa_users(class);
CREATE INDEX IF NOT EXISTS idx_loa_users_core_sun ON loa_users(core_sun);
CREATE INDEX IF NOT EXISTS idx_loa_users_core_moon ON loa_users(core_moon);
CREATE INDEX IF NOT EXISTS idx_loa_users_core_star ON loa_users(core_star);
CREATE INDEX IF NOT EXISTS idx_loa_users_stat_build ON loa_users(stat_build);

CREATE TABLE IF NOT EXISTS loa_sites (
  seq SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  href VARCHAR(500) NOT NULL UNIQUE,
  category VARCHAR(50),
  description TEXT,
  icon VARCHAR(500),
  is_active BOOLEAN DEFAULT TRUE,
  last_title VARCHAR(500),
  last_status INT,
  checked_at TIMESTAMP(0)
);

CREATE TABLE IF NOT EXISTS loa_class_summaries (
  class_name VARCHAR(50) PRIMARY KEY,
  summary TEXT,
  updated_at TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS youtube_view_snapshots (
  id BIGSERIAL PRIMARY KEY,
  video_id VARCHAR(20) NOT NULL,
  title VARCHAR(500) NOT NULL DEFAULT '',
  channel_title VARCHAR(255) NOT NULL DEFAULT '',
  thumbnail_url VARCHAR(500) NOT NULL DEFAULT '',
  published_at DATE NOT NULL,
  duration VARCHAR(20) NOT NULL DEFAULT '',
  view_count INT NOT NULL DEFAULT 0,
  recorded_date DATE NOT NULL,
  CONSTRAINT uk_video_date UNIQUE (video_id, recorded_date)
);

CREATE INDEX IF NOT EXISTS idx_youtube_view_snapshots_recorded_date ON youtube_view_snapshots(recorded_date);
CREATE INDEX IF NOT EXISTS idx_youtube_view_snapshots_published_at ON youtube_view_snapshots(published_at);

CREATE TABLE IF NOT EXISTS apm_page_visits (
  id BIGSERIAL PRIMARY KEY,
  path VARCHAR(255) NOT NULL,
  device_type apm_page_visits_device_type NOT NULL DEFAULT 'unknown',
  user_agent VARCHAR(500) NOT NULL,
  referrer VARCHAR(500),
  visits INT NOT NULL DEFAULT 1,
  last_seen_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  country_code VARCHAR(8) NOT NULL DEFAULT 'UNKNOWN',
  os_name VARCHAR(64) NOT NULL DEFAULT 'Unknown',
  browser_name VARCHAR(64) NOT NULL DEFAULT 'Unknown',
  CONSTRAINT uk_page_device_country_os_browser UNIQUE (path, device_type, country_code, os_name, browser_name)
);

CREATE TABLE IF NOT EXISTS apm_request_timings (
  id BIGSERIAL PRIMARY KEY,
  scope apm_request_timings_scope NOT NULL,
  name VARCHAR(100) NOT NULL,
  path VARCHAR(255),
  method VARCHAR(10),
  status_code INT,
  duration_ms INT NOT NULL,
  created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_apm_request_timings_created_at ON apm_request_timings(created_at);
CREATE INDEX IF NOT EXISTS idx_apm_request_timings_scope_name ON apm_request_timings(scope, name);

CREATE TABLE IF NOT EXISTS apm_system_metrics (
  id BIGSERIAL PRIMARY KEY,
  cpu_percent DECIMAL(5, 1) NOT NULL,
  memory_percent DECIMAL(5, 1) NOT NULL,
  rss_mb INT NOT NULL,
  heap_used_mb INT NOT NULL,
  total_mem_mb INT NOT NULL,
  load_avg_1m DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_apm_system_metrics_created_at ON apm_system_metrics(created_at);

CREATE TABLE IF NOT EXISTS monitoring_api_probes (
  id BIGSERIAL PRIMARY KEY,
  api_key VARCHAR(100) NOT NULL,
  path VARCHAR(255) NOT NULL,
  method VARCHAR(10) NOT NULL,
  cache_type monitoring_api_probes_cache_type NOT NULL DEFAULT 'no-cache',
  status_code INT NOT NULL,
  duration_ms INT NOT NULL,
  is_success BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_monitoring_api_probes_api_key ON monitoring_api_probes(api_key);
CREATE INDEX IF NOT EXISTS idx_monitoring_api_probes_created_at ON monitoring_api_probes(created_at);

CREATE TABLE IF NOT EXISTS apm_site_clicks (
  id BIGSERIAL PRIMARY KEY,
  site_name VARCHAR(255) NOT NULL,
  site_href VARCHAR(500) NOT NULL,
  site_category VARCHAR(100) NOT NULL DEFAULT 'unknown',
  device_type apm_site_clicks_device_type NOT NULL DEFAULT 'unknown',
  created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_apm_site_clicks_created_at ON apm_site_clicks(created_at);
CREATE INDEX IF NOT EXISTS idx_apm_site_clicks_site_href ON apm_site_clicks(site_href);

CREATE TABLE IF NOT EXISTS apm_youtube_clicks (
  id BIGSERIAL PRIMARY KEY,
  video_id VARCHAR(100) NOT NULL,
  video_title VARCHAR(500) NOT NULL DEFAULT '',
  channel_title VARCHAR(255) NOT NULL DEFAULT '',
  device_type apm_youtube_clicks_device_type NOT NULL DEFAULT 'unknown',
  created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_apm_youtube_clicks_created_at ON apm_youtube_clicks(created_at);
CREATE INDEX IF NOT EXISTS idx_apm_youtube_clicks_video_id ON apm_youtube_clicks(video_id);
