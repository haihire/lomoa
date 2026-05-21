import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface SiteRecord {
  seq: number;
  name: string;
  href: string;
  category: string | null;
  description: string | null;
  icon: string | null;
}

export interface AdminSiteRecord extends SiteRecord {
  is_active: number;
}

export interface SiteCheckRecord {
  seq: number;
  name: string;
  href: string;
  last_title: string | null;
  last_status: number | null;
}

export interface SiteCreateInput {
  name: string;
  href: string;
  category: string | null;
  description: string | null;
  icon: string | null;
}

export interface SiteUpdateInput {
  name?: string;
  href?: string;
  category?: string | null;
  description?: string | null;
  icon?: string | null;
  is_active?: boolean;
}

@Injectable()
export class SitesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findActive(): Promise<SiteRecord[]> {
    const rows = await this.prisma.loa_sites.findMany({
      where: { is_active: true },
      orderBy: { seq: 'asc' },
      select: {
        seq: true,
        name: true,
        href: true,
        category: true,
        description: true,
        icon: true,
      },
    });
    return rows.map((row) => ({
      ...row,
      seq: Number(row.seq),
    }));
  }

  async findAdminAll(): Promise<AdminSiteRecord[]> {
    const rows = await this.prisma.loa_sites.findMany({
      orderBy: { seq: 'asc' },
      select: {
        seq: true,
        name: true,
        href: true,
        category: true,
        description: true,
        icon: true,
        is_active: true,
      },
    });

    return rows.map((row) => ({
      ...row,
      seq: Number(row.seq),
      is_active: row.is_active ? 1 : 0,
    }));
  }

  async findBySeq(seq: number): Promise<{ seq: number } | null> {
    const row = await this.prisma.loa_sites.findUnique({
      where: { seq },
      select: { seq: true },
    });
    return row ? { seq: Number(row.seq) } : null;
  }

  async create(input: SiteCreateInput): Promise<number> {
    const created = await this.prisma.loa_sites.create({
      data: input,
      select: { seq: true },
    });
    return Number(created.seq);
  }

  async update(seq: number, input: SiteUpdateInput): Promise<void> {
    await this.prisma.loa_sites.update({
      where: { seq },
      data: input,
    });
  }

  async updateText(
    seq: number,
    input: Pick<SiteCreateInput, 'name' | 'description'>,
  ): Promise<void> {
    await this.prisma.loa_sites.update({
      where: { seq },
      data: input,
    });
  }

  async delete(seq: number): Promise<void> {
    await this.prisma.loa_sites.delete({ where: { seq } });
  }

  async findActiveForChecks(): Promise<SiteCheckRecord[]> {
    const rows = await this.prisma.loa_sites.findMany({
      where: { is_active: true },
      select: {
        seq: true,
        name: true,
        href: true,
        last_title: true,
        last_status: true,
      },
    });
    return rows.map((row) => ({
      ...row,
      seq: Number(row.seq),
    }));
  }

  async updateCheckResult(
    seq: number,
    input: { last_title: string | null; last_status: number },
  ): Promise<void> {
    await this.prisma.loa_sites.update({
      where: { seq },
      data: {
        last_title: input.last_title,
        last_status: input.last_status,
        checked_at: new Date(),
      },
    });
  }
}
