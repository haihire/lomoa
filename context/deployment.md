# 배포 절차

---

## 1. 서버 배포 (EC2 — 자동)

### 자동 배포 조건

`main` 브랜치에 `server/**` 또는 `client/**` 변경이 push되면  
GitHub Actions (`main-post-merge.yml`)가 자동으로 EC2에 배포합니다.

**배포 순서:**

1. GitHub Actions → AWS SSM으로 EC2에 명령 전송
2. `git reset --hard HEAD && git pull origin main`
3. `cd server && npm run build`
4. `docker compose up -d --build nest`
5. `docker restart daloa-nginx`

### 수동 배포 (GitHub Actions)

GitHub → Actions → `Main Post Merge` → `Run workflow` → `main` 선택

### 수동 배포 (SSH 직접)

```bash
ssh -i "C:\Users\tjdtn\Desktop\ingit\daloa\daloa-key.pem" ubuntu@3.39.239.9

# EC2 접속 후
cd daloa
git pull origin main
cd server && npm run build && cd ..
docker compose up -d --build nest
docker restart daloa-nginx
```

### EC2 환경변수 (.env) 설정

```bash
# EC2 접속 후 직접 편집
nano /home/ubuntu/daloa/server/.env

# 변경 후 컨테이너 재시작 (--build 없이도 env 반영됨)
cd /home/ubuntu/daloa && docker compose restart nest
```

### 로그 확인

```bash
docker logs daloa-nest --tail 50
docker logs daloa-nginx --tail 50
docker logs daloa-redis --tail 50
docker logs daloa-postgres --tail 50
```

---

## 2. 클라이언트 배포 (Vercel — 자동)

`main` 브랜치에 push하면 Vercel이 자동으로 빌드 + 배포합니다.

### Vercel 환경변수

Vercel 프로젝트 Settings → Environment Variables:

| 변수명                    | 환경        | 값                      |
| ------------------------- | ----------- | ----------------------- |
| `NEST_API_URL`            | All         | `https://api.daloa.kr`  |
| `REVALIDATE_SECRET`       | All         | (서버와 동일값)          |
| `TELEMETRY_INGEST_TOKEN`  | All         | (서버와 동일값)          |
| `NEXT_PUBLIC_GA_ID`       | Production  | `G-XXXXXXXXXX`          |
| `SYNC_TARGET_API_URL`     | All         | `https://api.daloa.kr`  |

### ISR 캐시 강제 무효화

```bash
# Vercel 캐시 무효화 없이 강제 재빌드
git commit --allow-empty -m "chore: 캐시 무효화"
git push origin main
```

---

## 3. 크롤러 (EC2 수동 실행)

```bash
# EC2 접속 후
cd daloa/crawlers
python3 crawl_rank.py
```

- 로그: `crawlers/logs/crawl-YYYY-MM-DD_HH-MM-SS.log`
- 자동 실행 (cron):
  ```bash
  # 매일 04:00 KST (UTC 19:00)
  crontab -e
  0 19 * * * cd /home/ubuntu/daloa/crawlers && python3 crawl_rank.py >> /dev/null 2>&1
  ```

---

## 4. DNS (가비아)

| 도메인         | 타입  | 값                     | 용도                  |
| -------------- | ----- | ---------------------- | -------------------- |
| `daloa.kr`     | CNAME | `cname.vercel-dns.com` | 클라이언트 (Vercel)  |
| `api.daloa.kr` | A     | `3.39.239.9`           | 서버 API (EC2)       |

---

## 5. SSL 인증서 (Let's Encrypt)

```bash
# EC2에서 최초 발급
sudo certbot certonly --standalone -d api.daloa.kr

# 자동 갱신 확인
sudo certbot renew --dry-run
```

- 인증서 경로: `/etc/letsencrypt/live/api.daloa.kr/`
- Nginx 컨테이너가 해당 경로를 마운트해서 사용
- 갱신 후 Nginx 재시작: `docker restart daloa-nginx`

---

## 6. EC2 SSH 접속

```powershell
ssh -i "C:\Users\tjdtn\Desktop\ingit\daloa\daloa-key.pem" ubuntu@3.39.239.9
```

- PEM 키 위치: 프로젝트 루트 `daloa-key.pem`
- EC2 IP: `3.39.239.9`

---

## 7. DB 동기화 (관리자 페이지)

관리자 페이지(`/admin/sync`)에서 `local → production` 방향으로 동기화.

- 로컬에서 실행 시 `local → production`만 허용
- 프로덕션에서 실행 시 `production → local`만 허용
- 동기화 전 원격 관리자 인증(오너 계정) 필요
- FK 의존 테이블(`loa_class`, `loa_ark_grid`) 자동 선처리
