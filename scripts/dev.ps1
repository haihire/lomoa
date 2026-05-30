# dev.ps1 — 하네스 엔지니어링 시작 스크립트
# 사용: powershell -File scripts/dev.ps1
# 효과: 포트 점유 프로세스 정리 → 서버(3001) + 클라이언트(3000) 시작 → logs/ 에 기록

param(
    [int]$ServerPort = 3001,
    [int]$ClientPort = 3000
)

$Root = Split-Path -Parent $PSScriptRoot

# ─────────────────────────────────────────
# 함수: 포트를 점유 중인 프로세스 강제 종료
# ─────────────────────────────────────────
function Kill-Port {
    param([int]$Port)
    $pids = netstat -ano | Select-String ":$Port\s" | ForEach-Object {
        ($_ -split '\s+')[-1]
    } | Sort-Object -Unique | Where-Object { $_ -match '^\d+$' }

    foreach ($procId in $pids) {
        try {
            Stop-Process -Id $procId -Force -ErrorAction Stop
            Write-Host "[dev] 포트 $Port 점유 프로세스 (PID $procId) 종료"
        } catch {
            # 이미 종료됨
        }
    }
}

function Wait-PortOpen {
    param(
        [int]$Port,
        [int]$TimeoutSec = 20
    )

    $deadline = (Get-Date).AddSeconds($TimeoutSec)
    while ((Get-Date) -lt $deadline) {
        if (Test-NetConnection -ComputerName 127.0.0.1 -Port $Port -InformationLevel Quiet -WarningAction SilentlyContinue) {
            return $true
        }
        Start-Sleep -Milliseconds 700
    }
    return $false
}

Write-Host ""
Write-Host "========================================"
Write-Host "  하네스 개발 환경 시작"
Write-Host "  서버: http://localhost:$ServerPort"
Write-Host "  클라이언트: http://localhost:$ClientPort"
Write-Host "========================================"
Write-Host ""

# 1) 오래된 로그 정리 (30일 이상)
Write-Host "[1/5] 오래된 로그 정리 중..."
& "$Root\scripts\cleanup-logs.ps1" -Days 30 | Out-Null
Write-Host "[1/5] 완료`n"

# 2) SSH 터널 (EC2 Redis → 로컬 6380)
Write-Host "[2/5] SSH 터널 확인 중..."
$pemPath = Join-Path $Root "daloa-key.pem"
$tunnelRunning = netstat -ano | Select-String ":6380\s" | Where-Object { $_ -match 'LISTENING' }
if (-not $tunnelRunning) {
    Write-Host "[2/5] SSH 터널 시작 (EC2 Redis → localhost:6380)..."
    Start-Process ssh -ArgumentList "-i `"$pemPath`" -N -L 6380:172.18.0.4:6379 -o StrictHostKeyChecking=no -o ServerAliveInterval=60 -o ServerAliveCountMax=3 ubuntu@3.39.239.9" -WindowStyle Hidden
    Start-Sleep -Seconds 2
    Write-Host "[2/5] 완료`n"
} else {
    Write-Host "[2/5] 이미 실행 중 (localhost:6380)`n"
}

# 3) 기존 포트 정리
Write-Host "[3/5] 기존 포트 정리 중..."
Kill-Port $ServerPort
Kill-Port $ClientPort
Start-Sleep -Milliseconds 500

# 로그 디렉터리 보장
$today = (Get-Date).ToString("yyyy-MM-dd")
$serverLogDir  = Join-Path $Root "server\logs"
$clientLogDir  = Join-Path $Root "client\logs"
$serverLogFile = Join-Path $serverLogDir "app-$today.log"
$clientLogFile = Join-Path $clientLogDir "app-$today.log"

if (-not (Test-Path $serverLogDir)) { New-Item -ItemType Directory -Path $serverLogDir | Out-Null }
if (-not (Test-Path $clientLogDir)) { New-Item -ItemType Directory -Path $clientLogDir | Out-Null }

# 4) 서버 시작 (별도 창 — 로그를 파일로도 저장)
Write-Host "[4/5] 서버 시작 (포트 $ServerPort)..."
$serverCmd = "cd '$Root\server'; npm run start:dev *>&1 | Tee-Object -FilePath '$serverLogFile' -Append"
Start-Process powershell -ArgumentList "-NoProfile", "-Command", $serverCmd -WindowStyle Hidden | Out-Null

if (-not (Wait-PortOpen -Port $ServerPort -TimeoutSec 20)) {
    Write-Host "[dev] 서버 포트 오픈 실패. 안정 모드(npx nest start)로 재시도..."
    Kill-Port $ServerPort
    $serverFallbackCmd = "cd '$Root\server'; npx nest start *>&1 | Tee-Object -FilePath '$serverLogFile' -Append"
    Start-Process powershell -ArgumentList "-NoProfile", "-Command", $serverFallbackCmd -WindowStyle Hidden | Out-Null

    if (-not (Wait-PortOpen -Port $ServerPort -TimeoutSec 20)) {
        Write-Host "[dev] 서버 시작 실패 (포트 $ServerPort 미오픈)"
    } else {
        Write-Host "[dev] 서버 재시도 성공 (포트 $ServerPort)"
    }
}

Start-Sleep -Seconds 3

# 5) 클라이언트 시작 (별도 창 — 로그를 파일로도 저장)
Write-Host "[5/5] 클라이언트 시작 (포트 $ClientPort)..."
$clientCmd = "cd '$Root\client'; npm run dev *>&1 | Tee-Object -FilePath '$clientLogFile' -Append"
Start-Process powershell -ArgumentList "-NoProfile", "-Command", $clientCmd -WindowStyle Hidden | Out-Null

if (-not (Wait-PortOpen -Port $ClientPort -TimeoutSec 20)) {
    Write-Host "[dev] 클라이언트 시작 실패 (포트 $ClientPort 미오픈)"
}

Write-Host ""
Write-Host "[dev] 시작 완료."
Write-Host "  서버 로그: $serverLogFile"
Write-Host "  클라이언트 로그: $clientLogFile"
Write-Host ""
Write-Host "  로그 수동 정리:"
Write-Host "    powershell -File scripts/cleanup-logs.ps1 -Days 7 -Verbose"
Write-Host ""
