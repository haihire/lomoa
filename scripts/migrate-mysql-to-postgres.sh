#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TEMPLATE_FILE="$ROOT_DIR/scripts/pgloader/migrate.load.template"
LOAD_FILE="$ROOT_DIR/scripts/pgloader/migrate.load"

if [[ ! -f "$TEMPLATE_FILE" ]]; then
  echo "[ERROR] template not found: $TEMPLATE_FILE" >&2
  exit 1
fi

MYSQL_URL="${MYSQL_URL:-}"
POSTGRES_URL="${POSTGRES_URL:-}"

if [[ -z "$MYSQL_URL" ]]; then
  echo "[ERROR] MYSQL_URL is required" >&2
  echo "  example: mysql://root:1234@host.docker.internal:3306/lost_ark" >&2
  exit 1
fi

if [[ -z "$POSTGRES_URL" ]]; then
  echo "[ERROR] POSTGRES_URL is required" >&2
  echo "  example: postgresql://postgres:1758@host.docker.internal:5432/lost_ark" >&2
  exit 1
fi

echo "[INFO] generating pgloader script..."
sed "s|__MYSQL_URL__|$MYSQL_URL|g; s|__POSTGRES_URL__|$POSTGRES_URL|g" \
  "$TEMPLATE_FILE" > "$LOAD_FILE"

echo "[INFO] running migration with docker compose profile=migration..."
docker compose --profile migration run --rm pgloader pgloader /pgloader/migrate.load

echo "[OK] migration finished"
