# DB 스키마

**DB 엔진**: PostgreSQL 16  
**ORM**: Prisma 7 (`@prisma/adapter-pg` driver adapter)  
**스키마 파일**: `server/prisma/schema.prisma`

> 변경 시 이 파일도 동시에 업데이트한다.

---

## 테이블 목록

| 테이블                | 역할                        |
| --------------------- | --------------------------- |
| `loa_class`           | 직업 마스터 (직업명·각인명) |
| `loa_ark_grid`        | 아크패시브 코어 마스터      |
| `loa_users`           | 크롤링된 캐릭터 데이터      |
| `loa_sites`           | 사이트 모음 목록            |
| `loa_class_summaries` | AI 직업 한줄평              |

---

## `loa_class`

직업 마스터 테이블. 직업명 + 각인명 조합으로 캐릭터를 분류할 때 사용.

| 컬럼              | 타입         | 설명                                        |
| ----------------- | ------------ | ------------------------------------------- |
| `idx`             | INT PK       | 자동 증가                                   |
| `class_detail`    | VARCHAR      | 직업명 (예: 건슬링어, 워로드)               |
| `class_engraving` | VARCHAR NULL | 직업 각인명 (예: 피스메이커, 고통의 수호자) |
| `class_root`      | VARCHAR      | 직업 뿌리 (예: 건슬링어 계열)               |
| `gender`          | VARCHAR      | 성별                                        |

**조회 패턴**

```sql
-- 각인명 있을 때
SELECT idx FROM loa_class WHERE class_detail = $1 AND class_engraving = $2 LIMIT 1;
-- fallback: 직업명만
SELECT idx FROM loa_class WHERE class_detail = $1 LIMIT 1;
```

---

## `loa_ark_grid`

아크패시브 코어 마스터. 코어 종류(태양/달/별)와 직업 매핑.

| 컬럼    | 타입    | 설명                   |
| ------- | ------- | ---------------------- |
| `seq`   | INT PK  | 자동 증가              |
| `core`  | VARCHAR | 코어 이름              |
| `start` | VARCHAR | 코어 종류 (태양/달/별) |
| `class` | VARCHAR | 해당 직업              |
| `order` | INT     | 코어 종류 내 순서      |

---

## `loa_users`

크롤러가 LostArk API로 수집한 캐릭터 데이터. 원정대 단위로 관리.

| 컬럼             | 타입         | 설명                                       |
| ---------------- | ------------ | ------------------------------------------ |
| `seq`            | INT PK       | 자동 증가                                  |
| `server`         | VARCHAR      | 서버명 (예: 카단, 아브렐슈드)              |
| `level`          | DECIMAL      | 전투력 (소수점 포함, 예: 1750.00)          |
| `class`          | INT FK       | `loa_class.idx` 참조                       |
| `thesix`         | TINYINT      | 원정대 내 전투력 상위 6위 이내 여부 (0/1)  |
| `name`           | VARCHAR      | 캐릭터 이름                                |
| `expedition_key` | VARCHAR      | `서버명:대표캐릭터명` 형식, 원정대 고유 키 |
| `core_sun`       | VARCHAR NULL | 장착 중인 태양 코어 이름                   |
| `core_moon`      | VARCHAR NULL | 장착 중인 달 코어 이름                     |
| `core_star`      | VARCHAR NULL | 장착 중인 별 코어 이름                     |
| `stat_crit`      | INT          | 아크패시브 치명 수치                       |
| `stat_spec`      | INT          | 아크패시브 특화 수치                       |
| `stat_swift`     | INT          | 아크패시브 신속 수치                       |

**핵심 인덱스**

- `expedition_key`: 원정대 중복 체크에 사용 (`EXISTS` API)
- `name`: 크롤러의 캐릭터명 존재 여부 확인

**스탯 빌드 분류 로직** (`characters.service.ts::classifyStatBuild`)

- 전체 합산(crit+spec+swift) < 300 → `미설정`
- 각 스탯 / 합산 ≥ 15% → 해당 스탯 "투자됨"으로 인정
- 활성 스탯 수치 내림차순으로 페어 결정 (치신, 신치, 치특, 특치, 신특, 특신, 치특신)

---

## `loa_sites`

사이트 모음 목록. 관리자가 직접 관리.

| 컬럼          | 타입          | 설명                         |
| ------------- | ------------- | ---------------------------- |
| `seq`         | INT PK        | 정렬 순서이기도 함           |
| `name`        | VARCHAR       | 사이트 이름                  |
| `href`        | VARCHAR       | URL                          |
| `category`    | VARCHAR       | 분류 (공식, 커뮤니티, 툴 등) |
| `description` | VARCHAR       | 한줄 설명                    |
| `icon`        | VARCHAR NULL  | 파비콘 URL                   |
| `is_active`   | TINYINT       | 활성 여부 (0/1)              |
| `last_title`  | VARCHAR NULL  | 직전 점검 시 title 태그 값   |
| `last_status` | INT NULL      | 직전 점검 시 HTTP 상태 코드  |
| `checked_at`  | DATETIME NULL | 마지막 점검 시각             |

**크론 점검** (`SitesService.checkSites`, 매일 09:00)

- 각 사이트 fetch → title 태그 추출 → 변경/다운 감지 → 카카오 알림

---

## `loa_class_summaries`

Gemini AI가 생성한 직업 한줄평. 처음 접근 시 없으면 자동 크롤링 후 AI 생성.

| 컬럼         | 타입       | 설명                                           |
| ------------ | ---------- | ---------------------------------------------- |
| `class_name` | VARCHAR PK | 직업명                                         |
| `summary`    | TEXT NULL  | AI 생성 한줄평                                 |
| `updated_at` | DATETIME   | 마지막 갱신 시각 (ON UPDATE CURRENT_TIMESTAMP) |

---

## 모니터링 테이블 (런타임 자동 생성)

`AdminMonitoringService.onModuleInit()`에서 `IF NOT EXISTS`로 자동 생성. Prisma 스키마에 없음.

| 테이블                   | 역할                                    |
| ------------------------ | --------------------------------------- |
| `apm_request_timings`    | API 요청별 응답시간 기록                |
| `apm_page_visits`        | 페이지뷰 기록 (경로·디바이스·국가 등)  |
| `apm_site_clicks`        | 사이트 클릭 기록                        |
| `apm_youtube_clicks`     | YouTube 영상 클릭 기록                  |
| `monitoring_api_probes`  | 10분마다 주요 API 헬스체크 결과 기록    |

보존 기간: 30일 (매일 03:00 자동 삭제 크론)

---

## 도커 메트릭 테이블 (런타임 자동 생성)

`DockerStatsService`가 5분마다 각 컨테이너 지표를 저장. 테이블명은 컨테이너별로 분리.

| 테이블                   | 대상 컨테이너    |
| ------------------------ | ---------------- |
| `docker_metrics_nest`    | daloa-nest       |
| `docker_metrics_nginx`   | daloa-nginx      |
| `docker_metrics_redis`   | daloa-redis      |
| `docker_metrics_postgres`| daloa-postgres   |

**공통 컬럼**

| 컬럼           | 타입    | 설명                      |
| -------------- | ------- | ------------------------- |
| `id`           | BIGINT PK SERIAL | 자동 증가          |
| `cpu_percent`  | REAL    | CPU 사용률 (%)            |
| `mem_used_mb`  | REAL    | 메모리 사용량 (MiB)       |
| `mem_total_mb` | REAL    | 메모리 총량 (MiB)         |
| `mem_percent`  | REAL    | 메모리 사용률 (%)         |
| `created_at`   | TIMESTAMPTZ | 수집 시각             |

보존 기간: 9일 (매일 03:30 자동 삭제 크론)  
집계 조회: `DATE_TRUNC('hour', created_at)` 기준 1시간 버킷 평균값
