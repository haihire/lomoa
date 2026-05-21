import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface AdminCharacterRow {
  name: string;
  server: string;
  level: number;
  combatPower: number | null;
  classDetail: string | null;
  classEngraving: string | null;
  statCrit: number;
  statSpec: number;
  statSwift: number;
  statBuild: string | null;
  thesix: number;
  coreSun: string | null;
  coreMoon: string | null;
  coreStar: string | null;
}

@Injectable()
export class AdminCharactersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async count(filters: {
    search?: string;
    statBuild?: string;
    classDetail?: string;
  }): Promise<number> {
    const { where, params } = buildWhere(filters);
    const rows = await this.prisma.$queryRawUnsafe<Array<{ total: bigint }>>(
      `SELECT COUNT(*) AS total
       FROM loa_users u
       LEFT JOIN loa_class c ON u.class = c.idx
       ${where}`,
      ...params,
    );
    return Number(rows[0]?.total ?? 0);
  }

  async findPage(filters: {
    search?: string;
    statBuild?: string;
    classDetail?: string;
    limit: number;
    offset: number;
  }): Promise<AdminCharacterRow[]> {
    const { where, params } = buildWhere(filters);
    return this.prisma.$queryRawUnsafe<AdminCharacterRow[]>(
      `SELECT
        u.name,
        u.server,
        u.level,
        u.combat_power    AS "combatPower",
        c.class_detail    AS "classDetail",
        c.class_engraving AS "classEngraving",
        u.stat_crit       AS "statCrit",
        u.stat_spec       AS "statSpec",
        u.stat_swift      AS "statSwift",
        u.stat_build      AS "statBuild",
        u.thesix,
        ag_sun.core       AS "coreSun",
        ag_moon.core      AS "coreMoon",
        ag_star.core      AS "coreStar"
       FROM loa_users u
       LEFT JOIN loa_class    c       ON u.class      = c.idx
       LEFT JOIN loa_ark_grid ag_sun  ON u.core_sun   = ag_sun.seq
       LEFT JOIN loa_ark_grid ag_moon ON u.core_moon  = ag_moon.seq
       LEFT JOIN loa_ark_grid ag_star ON u.core_star  = ag_star.seq
       ${where}
       ORDER BY u.level DESC
       LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      ...params,
      filters.limit,
      filters.offset,
    );
  }
}

function buildWhere(filters: {
  search?: string;
  statBuild?: string;
  classDetail?: string;
}) {
  const conditions: string[] = [];
  const params: unknown[] = [];

  if (filters.search) {
    params.push(`%${filters.search}%`);
    conditions.push(`u.name ILIKE $${params.length}`);
  }
  if (filters.classDetail) {
    params.push(filters.classDetail);
    conditions.push(`c.class_detail = $${params.length}`);
  }
  if (filters.statBuild) {
    params.push(filters.statBuild);
    conditions.push(`u.stat_build = $${params.length}`);
  }

  return {
    where: conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '',
    params,
  };
}
