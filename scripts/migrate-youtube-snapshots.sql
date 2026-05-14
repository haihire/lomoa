-- youtube 영상 메타데이터 + 일별 조회수 스냅샷 테이블
-- 실행: mysql -u [USER] -p --default-character-set=utf8mb4 lost_ark < scripts/migrate-youtube-snapshots.sql
--
-- 설계 원칙:
--   원리: video_id + recorded_date UNIQUE → 하루 1행
--   처음 등장 시 전체 INSERT, 이후 갱신 시 view_count만 UPDATE
--   7일 창 c16으로 밀려난 영상도 DB에 남아 리스트 조회 가능

CREATE TABLE IF NOT EXISTS `youtube_view_snapshots` (
  `id`            BIGINT UNSIGNED     NOT NULL AUTO_INCREMENT,
  `video_id`      VARCHAR(20)         NOT NULL,
  `title`         VARCHAR(500)        NOT NULL DEFAULT '',
  `channel_title` VARCHAR(255)        NOT NULL DEFAULT '',
  `thumbnail_url` VARCHAR(500)        NOT NULL DEFAULT '',
  `published_at`  DATE                NOT NULL,
  `duration`      VARCHAR(20)         NOT NULL DEFAULT '',
  `view_count`    INT UNSIGNED        NOT NULL DEFAULT 0,
  `recorded_date` DATE                NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_video_date` (`video_id`, `recorded_date`),
  INDEX `idx_recorded_date` (`recorded_date`),
  INDEX `idx_published_at`  (`published_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
