import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ClassSummaryRecord {
  className: string;
  summary: string;
  updatedAt: string;
  titleHash: string | null;
}

@Injectable()
export class ClassSummaryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async count(): Promise<number> {
    const rows = await this.prisma.$queryRaw<Array<{ total: bigint }>>`
      SELECT COUNT(*) AS total FROM loa_class_summaries
    `;
    return Number(rows[0]?.total ?? 0);
  }

  async exists(className: string): Promise<boolean> {
    const row = await this.prisma.loa_class_summaries.findUnique({
      where: { class_name: className },
      select: { class_name: true },
    });
    return row !== null;
  }

  async upsert(className: string, summary: string, titleHash: string): Promise<void> {
    await this.prisma.loa_class_summaries.upsert({
      where: { class_name: className },
      create: {
        class_name: className,
        summary,
        updated_at: new Date(),
        title_hash: titleHash,
      },
      update: {
        summary,
        updated_at: new Date(),
        title_hash: titleHash,
      },
    });
  }

  async findAll(order: string[]): Promise<ClassSummaryRecord[]> {
    const rows = await this.prisma.$queryRawUnsafe<ClassSummaryRecord[]>(
      `SELECT
         class_name AS "className",
         COALESCE(summary, '') AS summary,
         TO_CHAR(updated_at, 'YYYY-MM-DD HH24:MI') AS "updatedAt",
         title_hash AS "titleHash"
       FROM loa_class_summaries
       ORDER BY array_position($1::text[], class_name) NULLS LAST, class_name ASC`,
      order,
    );
    return rows;
  }

  async findOne(className: string): Promise<ClassSummaryRecord | null> {
    const rows = await this.prisma.$queryRaw<ClassSummaryRecord[]>`
      SELECT
        class_name AS "className",
        COALESCE(summary, '') AS summary,
        TO_CHAR(updated_at, 'YYYY-MM-DD HH24:MI') AS "updatedAt",
        title_hash AS "titleHash"
      FROM loa_class_summaries
      WHERE class_name = ${className}
      LIMIT 1
    `;
    return rows[0] ?? null;
  }
}
