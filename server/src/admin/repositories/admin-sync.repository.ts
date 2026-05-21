import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface SyncTableSpec {
  table: string;
  columns: readonly string[];
}

@Injectable()
export class AdminSyncRepository {
  constructor(private readonly prisma: PrismaService) {}

  async truncate(table: string): Promise<void> {
    await this.prisma.$executeRawUnsafe(
      `TRUNCATE TABLE ${quoteIdent(table)} RESTART IDENTITY CASCADE`,
    );
  }

  async insertRows(spec: SyncTableSpec, rows: unknown[][]): Promise<number> {
    if (rows.length === 0) return 0;

    const columns = spec.columns.map(quoteIdent).join(', ');
    const placeholders: string[] = [];
    const params: unknown[] = [];

    rows.forEach((row) => {
      const rowPlaceholders = row.map((value, index) => {
        const column = spec.columns[index];
        params.push(normalizeForColumn(column, value));
        return `$${params.length}`;
      });
      placeholders.push(`(${rowPlaceholders.join(', ')})`);
    });

    await this.prisma.$executeRawUnsafe(
      `INSERT INTO ${quoteIdent(spec.table)} (${columns}) VALUES ${placeholders.join(', ')}`,
      ...params,
    );

    return rows.length;
  }

  async count(table: string): Promise<number> {
    const rows = await this.prisma.$queryRawUnsafe<Array<{ total: bigint }>>(
      `SELECT COUNT(*) AS total FROM ${quoteIdent(table)}`,
    );
    return Number(rows[0]?.total ?? 0);
  }

  async readChunk(
    spec: SyncTableSpec,
    afterSeq: number,
    limit: number,
  ): Promise<Record<string, unknown>[]> {
    const columns = spec.columns.map(quoteIdent).join(', ');
    return this.prisma.$queryRawUnsafe<Record<string, unknown>[]>(
      `SELECT ${columns}
       FROM ${quoteIdent(spec.table)}
       WHERE seq > $1
       ORDER BY seq ASC
       LIMIT $2`,
      afterSeq,
      limit,
    );
  }
}

function quoteIdent(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

function normalizeForColumn(column: string, value: unknown): unknown {
  if (column === 'is_active') {
    if (value === 1 || value === '1') return true;
    if (value === 0 || value === '0') return false;
  }
  return value;
}
