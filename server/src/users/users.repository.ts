import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface UserUpsertRow {
  server: string;
  name: string;
  level: number;
  combatPower: number | null;
  classIdx: number | null;
  thesix: number;
  expeditionKey: string;
  coreSun: number | null;
  coreMoon: number | null;
  coreStar: number | null;
  statCrit: number;
  statSpec: number;
  statSwift: number;
  statBuild: string;
}

@Injectable()
export class UsersRepository {
  private static readonly UPSERT_CHUNK_SIZE = 1000;

  constructor(private readonly prisma: PrismaService) {}

  async findClassIdx(
    classDetail: string,
    classEngraving?: string | null,
  ): Promise<number | null> {
    const row = await this.prisma.loa_class.findFirst({
      where: classEngraving
        ? { class_detail: classDetail, class_engraving: classEngraving }
        : { class_detail: classDetail },
      select: { idx: true },
    });
    return row ? Number(row.idx) : null;
  }

  async existsByName(name: string): Promise<boolean> {
    const row = await this.prisma.loa_users.findUnique({
      where: { name },
      select: { seq: true },
    });
    return row !== null;
  }

  async needsCombatPower(name: string): Promise<boolean> {
    const row = await this.prisma.loa_users.findUnique({
      where: { name },
      select: { combat_power: true },
    });
    return row === null || row.combat_power === null;
  }

  async findArkGridByCore(
    core: string,
  ): Promise<{ seq: number; star: string | null } | null> {
    const row = await this.prisma.loa_ark_grid.findFirst({
      where: { core },
      select: { seq: true, star: true },
    });
    return row ? { seq: Number(row.seq), star: row.star } : null;
  }

  async upsertUsers(rows: UserUpsertRow[]): Promise<void> {
    if (rows.length === 0) {
      return;
    }

    for (let i = 0; i < rows.length; i += UsersRepository.UPSERT_CHUNK_SIZE) {
      const chunk = rows.slice(i, i + UsersRepository.UPSERT_CHUNK_SIZE);
      const columnCount = 14;
      const valuesSql = chunk
        .map((_, rowIndex) => {
          const start = rowIndex * columnCount + 1;
          const placeholders = Array.from(
            { length: columnCount },
            (_, n) => `$${start + n}`,
          );
          return `(${placeholders.join(', ')})`;
        })
        .join(', ');

      const params = chunk.flatMap((row) => [
        row.server,
        row.name,
        row.level,
        row.combatPower,
        row.classIdx,
        row.thesix,
        row.expeditionKey,
        row.coreSun,
        row.coreMoon,
        row.coreStar,
        row.statCrit,
        row.statSpec,
        row.statSwift,
        row.statBuild,
      ]);

      await this.prisma.$executeRawUnsafe(
        `
        INSERT INTO loa_users (
          server, name, level, combat_power, class, thesix, expedition_key,
          core_sun, core_moon, core_star, stat_crit, stat_spec, stat_swift, stat_build
        )
        VALUES ${valuesSql}
        ON CONFLICT (name) DO UPDATE SET
          level = EXCLUDED.level,
          combat_power = COALESCE(EXCLUDED.combat_power, loa_users.combat_power),
          class = EXCLUDED.class,
          thesix = EXCLUDED.thesix,
          expedition_key = EXCLUDED.expedition_key,
          core_sun = COALESCE(EXCLUDED.core_sun, loa_users.core_sun),
          core_moon = COALESCE(EXCLUDED.core_moon, loa_users.core_moon),
          core_star = COALESCE(EXCLUDED.core_star, loa_users.core_star),
          stat_crit = COALESCE(NULLIF(EXCLUDED.stat_crit, 0), loa_users.stat_crit),
          stat_spec = COALESCE(NULLIF(EXCLUDED.stat_spec, 0), loa_users.stat_spec),
          stat_swift = COALESCE(NULLIF(EXCLUDED.stat_swift, 0), loa_users.stat_swift),
          stat_build = CASE
            WHEN EXCLUDED.stat_crit = 0 AND EXCLUDED.stat_spec = 0 AND EXCLUDED.stat_swift = 0
              THEN loa_users.stat_build
            ELSE EXCLUDED.stat_build
          END
      `,
        ...params,
      );
    }
  }

  async findStats(): Promise<{
    total: number;
    byClass: { classRoot: string; count: number; avgLevel: number }[];
    byServer: { server: string; count: number }[];
    byClassDetail: { classDetail: string; count: number }[];
    theSixRate: { classRoot: string; theSixCount: number; total: number }[];
  }> {
    const [
      totalRows,
      byClassRows,
      byServerRows,
      byClassDetailRows,
      theSixRows,
    ] = await Promise.all([
      this.prisma.$queryRaw<Array<{ total: bigint }>>`
          SELECT COUNT(*) AS total FROM loa_users
        `,
      this.prisma.$queryRaw<
        Array<{ classRoot: string; count: bigint; avgLevel: number }>
      >`
          SELECT COALESCE(c.class_root, '미확인') AS "classRoot",
                 COUNT(*) AS count,
                 ROUND(AVG(u.level)::numeric, 2)::float AS "avgLevel"
          FROM loa_users u
          LEFT JOIN loa_class c ON u.class = c.idx
          GROUP BY c.class_root
          ORDER BY count DESC
        `,
      this.prisma.$queryRaw<Array<{ server: string; count: bigint }>>`
          SELECT COALESCE(server, '미확인') AS server, COUNT(*) AS count
          FROM loa_users
          GROUP BY server
          ORDER BY count DESC
        `,
      this.prisma.$queryRaw<Array<{ classDetail: string; count: bigint }>>`
          SELECT COALESCE(c.class_detail, '미확인') AS "classDetail", COUNT(*) AS count
          FROM loa_users u
          LEFT JOIN loa_class c ON u.class = c.idx
          GROUP BY c.class_detail
          ORDER BY count DESC
        `,
      this.prisma.$queryRaw<
        Array<{ classRoot: string; theSixCount: bigint; total: bigint }>
      >`
          SELECT COALESCE(c.class_root, '미확인') AS "classRoot",
                 COALESCE(SUM(u.thesix), 0) AS "theSixCount",
                 COUNT(*) AS total
          FROM loa_users u
          LEFT JOIN loa_class c ON u.class = c.idx
          GROUP BY c.class_root
          ORDER BY "theSixCount" DESC
        `,
    ]);

    return {
      total: Number(totalRows[0]?.total ?? 0),
      byClass: byClassRows.map((row) => ({
        classRoot: row.classRoot,
        count: Number(row.count),
        avgLevel: Number(row.avgLevel),
      })),
      byServer: byServerRows.map((row) => ({
        server: row.server,
        count: Number(row.count),
      })),
      byClassDetail: byClassDetailRows.map((row) => ({
        classDetail: row.classDetail,
        count: Number(row.count),
      })),
      theSixRate: theSixRows.map((row) => ({
        classRoot: row.classRoot,
        theSixCount: Number(row.theSixCount),
        total: Number(row.total),
      })),
    };
  }
}
