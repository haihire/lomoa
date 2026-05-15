-- loa_users 에 stat_build 컬럼 추가 + 인덱스
-- 백필은 server/scripts/backfill-stat-build.ts 로 실행 (classifyStatBuild 로직과 동일)
--
-- 실행:
--   mysql -u [user] -p [dbname] --default-character-set=utf8mb4 < migrate-loa-users-stat-build.sql
--   cd server && npx ts-node scripts/backfill-stat-build.ts

ALTER TABLE loa_users
  ADD COLUMN stat_build VARCHAR(10) NULL COLLATE utf8mb4_general_ci AFTER stat_swift,
  ADD INDEX  idx_stat_build (stat_build);
