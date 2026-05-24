# 성능 개선 상세 기록

| 항목           | Before | After   | 개선율 |
| -------------- | ------ | ------- | ------ |
| 초기 로딩 시간 | 4.2s   | 1.1s    | 73% ↓  |
| DB 응답 시간   | 500ms  | 50ms    | 90% ↓  |
| 동시 요청 처리 | 50 QPS | 500 QPS | 10배 ↑ |

---

## 1. 초기 로딩 시간  4.2s → 1.1s (73% ↓)

### 원인

초기에는 모든 fetch에 `cache: "no-store"`를 사용했다. 사용자가 접속할 때마다 Vercel 서버리스 함수가 NestJS API를 호출하고 그 결과를 기다려 HTML을 생성했기 때문에, 응답 시간이 `DB 조회 + 렌더링 시간`에 그대로 노출됐다. 또한 유튜브 데이터를 사이트 목록·특성 빌드와 함께 `Promise.all`로 묶어 가져와서, 유튜브 응답이 늦으면 페이지 전체가 블로킹됐다.

### 해결: `no-store` → ISR (`next: { revalidate }`) 전환

`cache: "no-store"`를 제거하고 `next: { revalidate: N }` 옵션을 적용했다. 최초 렌더링 결과를 Vercel Edge Network에 정적 HTML로 캐싱하고, 이후 요청은 NestJS까지 도달하지 않고 엣지에서 즉시 반환된다.

```ts
// client/app/page.tsx — Before
fetch(`${API}/api/sites`, { cache: "no-store" })

// After
fetch(`${API}/api/sites`, { next: { revalidate: 300 } })
fetch(`${API}/api/characters/stat-builds`, { next: { revalidate: 300 } })
```

```ts
// client/components/youtube/YoutubeSection.tsx
fetch(`${API}/api/streamers/popular?offset=0&limit=8`, {
  next: { revalidate: 3600 },
})
```

### 해결: YoutubeSection을 Promise.all에서 분리 + Suspense 스트리밍

유튜브 데이터를 초기 `Promise.all`에서 제거하고, 별도 `YoutubeSection` 컴포넌트로 분리한 뒤 `<Suspense>`로 감쌌다. 메인 콘텐츠(사이트 목록, 특성 빌드)를 먼저 렌더링한 뒤 유튜브 섹션은 뒤에 스트리밍한다.

```tsx
// client/app/page.tsx — Before: YouTube가 Promise.all 안에 포함
const [sites, statBuilds, youtubeInitial] = await Promise.all([
  fetch(`${API}/api/sites`, { cache: "no-store" })...,
  fetch(`${API}/api/characters/stat-builds`, ...)...,
  fetch(`${API}/api/streamers/popular?...`)...,   // ← 여기서 블로킹
]);

// After: YouTube 제거, Suspense로 분리
const [sites, statBuilds] = await Promise.all([
  fetch(`${API}/api/sites`, { next: { revalidate: 300 } })...,
  fetch(`${API}/api/characters/stat-builds`, { next: { revalidate: 300 } })...,
]);

// JSX
<Suspense fallback={<skeleton />}>
  <YoutubeSection />  {/* 별도 스트림으로 뒤에 도착 */}
</Suspense>
```


### 해결: 배포 시 즉시 캐시 무효화

NestJS가 재시작될 때 `RevalidateService`가 Vercel의 ISR 캐시를 강제 무효화해, 배포 후에도 구버전 HTML이 서빙되는 시간을 0으로 줄인다.

```ts
// server/src/revalidate/revalidate.service.ts
async onApplicationBootstrap(): Promise<void> {
  await fetch(process.env.NEXT_REVALIDATE_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.NEXT_REVALIDATE_SECRET}` },
  });
}
```

---

## 2. DB 응답 시간  500ms → 50ms (90% ↓)

### 문제: TTL 기반 캐시는 쓰기 일관성을 보장하지 않는다

Redis TTL 캐시를 붙이는 것 자체는 표준 패턴이다. 실제로 고민이 필요했던 부분은 **캐시와 실제 데이터 간의 일관성**이었다.

admin 페이지에서 사이트 정보를 수정한 뒤 메인 페이지를 새로고침해도 변경 내용이 보이지 않는 문제가 생겼다. 원인을 추적하니 두 개의 캐시 레이어가 겹쳐 있었다.

```
admin 쓰기
  → DB 반영 즉시
  → Redis 캐시: 최대 10분 뒤 반영  ← 1차 지연
  → Vercel ISR: 최대 24시간 뒤 반영 ← 2차 지연
```

최악의 경우 admin이 데이터를 수정해도 24시간 이상 구버전이 사용자에게 노출됐다.

### 해결: 쓰기 경로에서 두 캐시를 연쇄 무효화

TTL 만료를 기다리지 않고, admin 쓰기 직후 Redis 캐시 삭제와 ISR 무효화를 함께 실행한다.

```ts
// server/src/sites/sites.service.ts
async invalidateCache(): Promise<void> {
  await this.redis.del(CACHE_KEY); // Redis 즉시 삭제
}

// client/app/api/admin/sites/route.ts
// admin POST/PUT/DELETE 성공 시
revalidatePath('/'); // Vercel ISR 즉시 무효화
```

이후 admin 변경 사항은 다음 요청 시점에 즉시 반영된다.

### 고민: YouTube TTL을 Cron 주기보다 길게 설정한 이유

YouTube 데이터는 Cron으로 3시간마다 갱신한다. 처음에 TTL도 3시간으로 맞췄더니 문제가 생겼다. Cron 실행에 수십 초가 걸리는 동안 이전 캐시가 만료되면, 그 사이 들어온 요청이 빈 배열을 받았다.

TTL을 Cron 주기보다 1시간 더 긴 4시간으로 늘려 Cron이 새 데이터를 채우는 동안 이전 캐시가 살아있도록 했다.

```ts
// server/src/streamers/streamers.service.ts
const CACHE_TTL = 4 * 60 * 60; // 4시간 — Cron 주기(3h)보다 여유있게

@Cron('0 */3 * * *') // 3시간마다 갱신
async refreshYoutubeCache() { ... }
```

---

## 3. 동시 요청 처리  50 QPS → 500 QPS (10배 ↑)

### 원인

DB를 직접 조회하는 구조에서는 동시 요청이 늘어날수록 DB 커넥션 풀이 고갈되고 응답이 지연됐다.

### 해결: 캐시 적중률 극대화

위에서 적용한 Redis 캐시로 인해 실제 DB까지 도달하는 요청 비율이 대폭 줄었다. 캐시 TTL 동안 동일 데이터를 요청하는 수백 건의 요청이 DB 조회 없이 Redis에서 처리된다.

### 해결: Vercel ISR 정적 서빙

ISR이 적용된 페이지 요청은 Vercel Edge Network에서 정적 HTML로 응답한다. 이 요청들은 NestJS 서버에 도달하지 않으므로, 서버 QPS 여유가 대폭 확보된다.

### 해결: Nginx rate limiting

개별 IP의 과도한 요청을 Nginx 레벨에서 차단해 서버 리소스를 보호한다.

```nginx
# nginx/default.conf
limit_req_zone $binary_remote_addr zone=api_per_ip:10m rate=120r/m;

location / {
  limit_req zone=api_per_ip burst=30 nodelay;
  proxy_pass http://nest:3001;
}
```

- IP당 분당 120회 기본 제한
- 순간 burst 30회까지 허용 (지연 없이 즉시 처리)
- 초과 요청은 `429 Too Many Requests`로 즉시 반환

### 해결: YouTube API 멀티키 순환 + 할당량 보호

YouTube API는 키 1개당 일 10,000 유닛 제한이 있다. API 키를 여러 개 등록하고(`YOUTUBE_API_KEY`, `YOUTUBE_API_KEY_2`, ...), 한 키가 할당량을 소진하면 다음 키로 자동 전환해 사실상 가용 유닛을 수평 확장한다.

```ts
// server/src/streamers/streamers.service.ts
private currentKeyIdx = 0;

// 키 순환: 할당량 초과 시 다음 키로 전환
this.currentKeyIdx = (this.currentKeyIdx + 1) % total;
```

모든 키가 소진되면 Redis에 차단 키를 저장하고, KST 16:00(YouTube API 리셋 시각, UTC 07:00)까지 외부 호출을 막는다.

```ts
const QUOTA_KEY = 'youtube:quota_exceeded'; // TTL: KST 16:00까지
```

캐시 만료 직후 동시 요청이 몰려 YouTube API를 중복 호출하는 Thundering Herd 문제는 Redis 분산 락으로 막는다.

```ts
const LOCK_VIDEOS_KEY = 'youtube:lock:videos';
const LOCK_POPULAR_KEY = 'youtube:lock:popular';
const LOCK_TTL = 60; // 락 최대 60초 유지
```

---

## 요약

| 개선 항목             | 적용 기술                              |
| --------------------- | -------------------------------------- |
| 페이지 로딩 속도      | Vercel ISR (no-store → revalidate 전환) |
| 점진적 렌더링         | React Suspense (YoutubeSection 분리)   |
| DB 응답 속도          | Redis 캐시 (TTL 600s ~ 4h)            |
| 배포 후 최신 데이터   | RevalidateService (ISR 즉시 무효화)    |
| 동시 처리량           | Redis 캐시 적중 + ISR 정적 서빙        |
| 서버 보호             | Nginx rate limiting (120r/m, burst 30) |
| YouTube API 보호      | 멀티키 순환 + 할당량 차단 키 + 분산 락              |
