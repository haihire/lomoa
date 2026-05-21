import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  MessageEvent,
  Param,
  Post,
  Query,
  Sse,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { AdminAuthService } from './admin-auth.service';
import { AdminWriteGuard, RequireOwner } from './admin.guard';
import { AdminSyncRepository } from './repositories/admin-sync.repository';

type TableKey = 'users' | 'sites';
type SyncDirection = 'local-to-prod' | 'prod-to-local';

interface TableSpec {
  table: string;
  columns: readonly string[];
}

interface PrereqSpec extends TableSpec {
  pkColumn: string;
}

// loa_users FK 의존 테이블 - 데이터 없으면 먼저 복사, 있으면 스킵
const PREREQ_SPECS: PrereqSpec[] = [
  {
    table: 'loa_class',
    columns: ['idx', 'class_engraving', 'class_root', 'gender', 'class_detail'],
    pkColumn: 'idx',
  },
  {
    table: 'loa_ark_grid',
    columns: ['seq', 'core', 'star', 'class', 'order'],
    pkColumn: 'seq',
  },
];

const TABLE_SPECS: Record<TableKey, TableSpec> = {
  users: {
    table: 'loa_users',
    columns: [
      'seq',
      'server',
      'level',
      'combat_power',
      'class',
      'thesix',
      'name',
      'expedition_key',
      'core_sun',
      'core_moon',
      'core_star',
      'stat_crit',
      'stat_spec',
      'stat_swift',
      'stat_build',
    ],
  },
  sites: {
    table: 'loa_sites',
    columns: [
      'seq',
      'name',
      'href',
      'category',
      'description',
      'icon',
      'is_active',
      'last_title',
      'last_status',
      'checked_at',
    ],
  },
};

const SYNC_CHUNK_SIZE = 25;
const SYNC_MAX_PAYLOAD_BYTES = 32 * 1024;
const SYNC_CHUNK_DELAY_MS = 1000;

function specOrThrow(table: string): TableSpec {
  if (!(table in TABLE_SPECS)) {
    throw new BadRequestException(`unsupported table: ${table}`);
  }
  return TABLE_SPECS[table as TableKey];
}

function seqIndexOrThrow(spec: TableSpec): number {
  const seqIndex = spec.columns.indexOf('seq');
  if (seqIndex === -1) {
    throw new BadRequestException(`seq column not found for ${spec.table}`);
  }
  return seqIndex;
}

function directionOrThrow(direction: string): SyncDirection {
  if (direction === 'local-to-prod' || direction === 'prod-to-local') {
    return direction;
  }
  throw new BadRequestException(`unsupported direction: ${direction}`);
}

@Controller('api/admin/sync')
export class AdminSyncController {
  constructor(
    private readonly adminSyncRepo: AdminSyncRepository,
    private readonly config: ConfigService,
    private readonly authService: AdminAuthService,
  ) {}

  @Post(':table/begin')
  @UseGuards(AdminWriteGuard)
  @RequireOwner()
  async begin(@Param('table') table: string) {
    const spec = specOrThrow(table);
    await this.adminSyncRepo.truncate(spec.table);
    return { ok: true, table: spec.table };
  }

  @Post(':table/chunk')
  @UseGuards(AdminWriteGuard)
  @RequireOwner()
  async chunk(
    @Param('table') table: string,
    @Body() body: { rows?: unknown[][] },
  ) {
    const spec = specOrThrow(table);
    const rows = body?.rows;
    if (!Array.isArray(rows) || rows.length === 0) {
      return { inserted: 0 };
    }

    for (const row of rows) {
      if (!Array.isArray(row) || row.length !== spec.columns.length) {
        throw new BadRequestException(
          `row length mismatch (expected=${spec.columns.length})`,
        );
      }
    }

    const inserted = await this.adminSyncRepo.insertRows(spec, rows);
    return { inserted };
  }

  @Post(':table/count')
  @UseGuards(AdminWriteGuard)
  @RequireOwner()
  async count(@Param('table') table: string) {
    const spec = specOrThrow(table);
    return { total: await this.adminSyncRepo.count(spec.table) };
  }

  @Post(':table/chunk-read')
  @UseGuards(AdminWriteGuard)
  @RequireOwner()
  async chunkRead(
    @Param('table') table: string,
    @Body() body: { afterSeq?: number; limit?: number },
  ) {
    const spec = specOrThrow(table);
    const seqIndex = seqIndexOrThrow(spec);
    const afterSeq = Number(body?.afterSeq ?? 0);
    const limit = Number(body?.limit ?? SYNC_CHUNK_SIZE);
    const safeAfterSeq = Number.isFinite(afterSeq) ? afterSeq : 0;
    const safeLimitInput = Number.isFinite(limit) ? limit : SYNC_CHUNK_SIZE;
    const safeLimit = Math.max(1, Math.min(SYNC_CHUNK_SIZE, safeLimitInput));
    const rows = await this.adminSyncRepo.readChunk(
      spec,
      safeAfterSeq,
      safeLimit,
    );
    const values = rows.map((r) => spec.columns.map((c) => normalize(r[c])));
    const lastRow = rows[rows.length - 1];
    const seqColumn = spec.columns[seqIndex];
    const lastSeq =
      rows.length > 0 ? Number(lastRow[seqColumn] ?? afterSeq) : afterSeq;
    return { rows: values, lastSeq };
  }

  @Post('prereq/:table/count')
  @UseGuards(AdminWriteGuard)
  @RequireOwner()
  async prereqCount(@Param('table') table: string) {
    const spec = PREREQ_SPECS.find((s) => s.table === table);
    if (!spec) throw new BadRequestException(`unsupported prereq table: ${table}`);
    return { total: await this.adminSyncRepo.count(spec.table) };
  }

  @Post('prereq/:table/chunk')
  @UseGuards(AdminWriteGuard)
  @RequireOwner()
  async prereqChunk(
    @Param('table') table: string,
    @Body() body: { rows?: unknown[][] },
  ) {
    const spec = PREREQ_SPECS.find((s) => s.table === table);
    if (!spec) throw new BadRequestException(`unsupported prereq table: ${table}`);
    const rows = body?.rows;
    if (!Array.isArray(rows) || rows.length === 0) return { inserted: 0 };
    const inserted = await this.adminSyncRepo.insertRows(spec, rows);
    return { inserted };
  }

  @Post('check')
  @HttpCode(HttpStatus.OK)
  async syncLoginCheck(@Body() body: { username?: string; password?: string }) {
    if (!body.username || !body.password) {
      throw new BadRequestException('username/password required');
    }
    return this.authService.login(body.username, body.password);
  }

  @Sse(':table/run')
  @UseGuards(AdminWriteGuard)
  @RequireOwner()
  run(
    @Param('table') table: string,
    @Query('sessionId') sessionId?: string,
    @Query('direction') direction?: string,
  ): Observable<MessageEvent> {
    const spec = specOrThrow(table);
    const seqIndex = seqIndexOrThrow(spec);
    const syncDirection = directionOrThrow(direction?.trim() ?? '');
    const targetUrl = this.config.get<string>('SYNC_TARGET_API_URL', '').trim();
    const remoteToken = sessionId?.trim() ?? '';
    const isLocalRuntime =
      this.config.get<string>('NODE_ENV', '').trim() !== 'production';

    if (syncDirection === 'local-to-prod' && !isLocalRuntime) {
      throw new BadRequestException(
        'local-to-prod is allowed only on local runtime',
      );
    }
    if (syncDirection === 'prod-to-local' && isLocalRuntime) {
      throw new BadRequestException(
        'prod-to-local is allowed only on production runtime',
      );
    }

    return new Observable<MessageEvent>((subscriber) => {
      let cancelled = false;
      const targetLabel =
        syncDirection === 'local-to-prod' ? 'production' : 'local';

      const emit = (
        type: 'progress' | 'done' | 'error',
        data: Record<string, unknown>,
      ) => {
        subscriber.next({ type, data });
      };

      void (async () => {
        try {
          if (!targetUrl) {
            throw new Error('SYNC_TARGET_API_URL is required');
          }
          if (!remoteToken) {
            throw new Error('remote admin session is required');
          }

          emit('progress', {
            phase: 'login',
            message: 'validating remote session',
            percent: 0,
          });

          // users 동기화 시 FK 의존 테이블(loa_class, loa_ark_grid) 먼저 처리
          if (table === 'users' && syncDirection === 'local-to-prod') {
            for (const prereq of PREREQ_SPECS) {
              const countRes = await callTargetRaw(
                targetUrl,
                `/api/admin/sync/prereq/${prereq.table}/count`,
                remoteToken,
                {},
              );
              const remoteCount = Number(
                (countRes as { total?: number })?.total ?? 0,
              );

              if (remoteCount > 0) {
                emit('progress', {
                  phase: 'begin',
                  message: `${prereq.table} 이미 존재 (${remoteCount}행) — 스킵`,
                  percent: 0,
                });
                continue;
              }

              emit('progress', {
                phase: 'begin',
                message: `${prereq.table} 복사 중...`,
                percent: 0,
              });

              const prereqRows = await this.adminSyncRepo.readAll(
                prereq,
                prereq.pkColumn,
              );
              const prereqValues = prereqRows.map((r) =>
                prereq.columns.map((c) => normalize(r[c])),
              );
              for (const chunk of splitRowsByPayloadSize(prereqValues)) {
                await callTargetRaw(
                  targetUrl,
                  `/api/admin/sync/prereq/${prereq.table}/chunk`,
                  remoteToken,
                  { rows: chunk },
                );
              }

              emit('progress', {
                phase: 'begin',
                message: `${prereq.table} ${prereqRows.length}행 복사 완료`,
                percent: 0,
              });
            }
          }

          emit('progress', {
            phase: 'begin',
            message: `${spec.table} ${targetLabel} TRUNCATE`,
            percent: 0,
          });

          await callTargetRaw(
            targetUrl,
            `/api/admin/sync/${table}/begin`,
            remoteToken,
            {},
          );

          const total = await this.adminSyncRepo.count(spec.table);

          emit('progress', {
            phase: 'count',
            total,
            transferred: 0,
            percent: total === 0 ? 100 : 0,
          });

          if (total === 0) {
            emit('done', { total: 0, transferred: 0 });
            subscriber.complete();
            return;
          }

          let transferred = 0;
          let lastSeq = 0;

          while (!cancelled) {
            const rows = await this.adminSyncRepo.readChunk(
              spec,
              lastSeq,
              SYNC_CHUNK_SIZE,
            );
            const values = rows.map((row) =>
              spec.columns.map((column) => normalize(row[column])),
            );

            if (values.length === 0) break;
            const last = values[values.length - 1];
            lastSeq = Number(last[seqIndex] ?? lastSeq);

            for (const rows of splitRowsByPayloadSize(values)) {
              if (cancelled) break;

              const res = await callTargetRaw(
                targetUrl,
                `/api/admin/sync/${table}/chunk`,
                remoteToken,
                { rows },
              );
              const inserted = Number(
                (res as { inserted?: number })?.inserted ?? 0,
              );
              transferred += inserted;

              emit('progress', {
                phase: 'chunk',
                total,
                transferred,
                percent: Math.min(99, Math.floor((transferred / total) * 100)),
                lastSeq,
              });

              await sleep(SYNC_CHUNK_DELAY_MS);
            }

            if (cancelled) break;
          }

          if (cancelled) {
            emit('error', { message: 'cancelled' });
            subscriber.complete();
            return;
          }

          emit('done', { total, transferred, percent: 100 });
          subscriber.complete();
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          emit('error', { message: msg });
          subscriber.complete();
        } finally {
          if (targetUrl && remoteToken) {
            await callTargetRaw(
              targetUrl,
              '/api/admin/auth/logout',
              remoteToken,
              {},
            ).catch(() => undefined);
          }
        }
      })();

      return () => {
        cancelled = true;
      };
    });
  }
}

function normalize(v: unknown): unknown {
  if (v === undefined) return null;
  if (v instanceof Date) {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${v.getFullYear()}-${pad(v.getMonth() + 1)}-${pad(v.getDate())} ${pad(v.getHours())}:${pad(v.getMinutes())}:${pad(v.getSeconds())}`;
  }
  return v;
}

function splitRowsByPayloadSize(rows: unknown[][]): unknown[][][] {
  const batches: unknown[][][] = [];
  let current: unknown[][] = [];

  for (const row of rows) {
    const next = [...current, row];
    if (
      current.length > 0 &&
      payloadSize({ rows: next }) > SYNC_MAX_PAYLOAD_BYTES
    ) {
      batches.push(current);
      current = [row];
    } else {
      current = next;
    }
  }

  if (current.length > 0) {
    batches.push(current);
  }

  return batches;
}

function payloadSize(body: unknown): number {
  return Buffer.byteLength(JSON.stringify(body), 'utf8');
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callTargetRaw(
  baseUrl: string,
  path: string,
  token: string,
  body: unknown,
): Promise<unknown> {
  const url = baseUrl.replace(/\/$/, '') + path;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) headers['x-admin-session'] = token;
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(
      `target ${path} failed (${res.status}): ${text.slice(0, 300)}`,
    );
  }
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return {};
  }
}
