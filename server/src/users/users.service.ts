import { Injectable } from '@nestjs/common';
import { classifyStatBuild } from '../characters/characters.service';
import { LostarkService } from '../lostark/lostark.service';
import { UsersRepository, type UserUpsertRow } from './users.repository';

interface Sibling {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
}

interface ArmoryData {
  ArmoryProfile?: {
    CharacterName: string;
    ServerName: string;
    CharacterClassName: string;
    ItemAvgLevel: string;
    CombatPower?: string | null;
    Stats?: { Type: string; Value: string }[];
  } | null;
  ArkPassive?: {
    IsArkPassive: boolean;
    Title: string | null;
    Points?: { Name: string; Value: number }[];
  } | null;
  ArkGrid?: {
    Slots: { Index: number; Name: string; Point: number }[];
  } | null;
}

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly lostark: LostarkService,
  ) {}

  private async findClassIdx(
    charClassName: string,
    arkTitle: string | null,
  ): Promise<number | null> {
    if (arkTitle) {
      const exact = await this.usersRepo.findClassIdx(charClassName, arkTitle);
      if (exact !== null) return exact;
    }
    return this.usersRepo.findClassIdx(charClassName);
  }

  async existsByName(name: string): Promise<boolean> {
    return this.usersRepo.existsByName(name);
  }

  async needsCombatPower(name: string): Promise<boolean> {
    return this.usersRepo.needsCombatPower(name);
  }

  async searchAndUpsert(characterName: string): Promise<{
    saved: number;
    expeditionKey: string;
    characters: {
      name: string;
      class: string;
      classDetail: string | null;
      classIdx: number | null;
      level: number;
      thesix: boolean;
    }[];
  }> {
    const siblings = await this.lostark.fetchSiblings<Sibling[]>(characterName);
    if (!siblings || siblings.length === 0) {
      throw new Error(`Character not found: ${characterName}`);
    }

    const parseLevel = (value: string) =>
      parseFloat((value || '0').replace(/,/g, ''));
    const sorted = [...siblings].sort(
      (a, b) => parseLevel(b.ItemAvgLevel) - parseLevel(a.ItemAvgLevel),
    );
    const theSixSet = new Set(sorted.slice(0, 6).map((s) => s.CharacterName));
    const topChar = sorted[0];
    const expeditionKey = `${topChar.ServerName}:${topChar.CharacterName}`;

    const results: {
      name: string;
      class: string;
      classDetail: string | null;
      classIdx: number | null;
      level: number;
      thesix: boolean;
    }[] = [];
    const buffer: UserUpsertRow[] = [];

    for (const sib of siblings) {
      const armory = await this.safeFetchArmory(sib.CharacterName);
      const classDetail = armory?.ArkPassive?.Title ?? null;
      const stats = readStats(armory);
      const cores = await this.readCores(armory);
      const level = parseLevel(sib.ItemAvgLevel);
      const thesix = theSixSet.has(sib.CharacterName) ? 1 : 0;
      const classIdx = await this.findClassIdx(
        sib.CharacterClassName,
        classDetail,
      );

      buffer.push({
        server: sib.ServerName,
        name: sib.CharacterName,
        level,
        combatPower: readCombatPower(armory),
        classIdx,
        thesix,
        expeditionKey,
        coreSun: cores.coreSun,
        coreMoon: cores.coreMoon,
        coreStar: cores.coreStar,
        statCrit: stats.statCrit,
        statSpec: stats.statSpec,
        statSwift: stats.statSwift,
        statBuild: classifyStatBuild(
          stats.statCrit,
          stats.statSpec,
          stats.statSwift,
        ),
      });

      results.push({
        name: sib.CharacterName,
        class: sib.CharacterClassName,
        classDetail,
        classIdx,
        level,
        thesix: thesix === 1,
      });
    }

    if (buffer.length > 0) {
      await this.usersRepo.upsertUsers(buffer);
    }

    return { saved: results.length, expeditionKey, characters: results };
  }

  private async safeFetchArmory(name: string): Promise<ArmoryData | null> {
    try {
      return await this.lostark.fetchArmory<ArmoryData | null>(name);
    } catch {
      return null;
    }
  }

  private async readCores(armory: ArmoryData | null): Promise<{
    coreSun: number | null;
    coreMoon: number | null;
    coreStar: number | null;
  }> {
    let coreSun: number | null = null;
    let coreMoon: number | null = null;
    let coreStar: number | null = null;

    for (const slot of armory?.ArkGrid?.Slots ?? []) {
      if (!slot.Name) continue;
      const sep = ' 肄붿뼱 : ';
      const sepIdx = slot.Name.indexOf(sep);
      const coreName =
        sepIdx >= 0 ? slot.Name.slice(sepIdx + sep.length) : slot.Name;
      const row = await this.usersRepo.findArkGridByCore(coreName);
      if (!row) continue;

      if (row.star?.includes('해')) coreSun = row.seq;
      else if (row.star?.includes('달')) coreMoon = row.seq;
      else if (row.star?.includes('별')) coreStar = row.seq;
    }

    return { coreSun, coreMoon, coreStar };
  }

  async getStats(): Promise<{
    total: number;
    byClass: { classRoot: string; count: number; avgLevel: number }[];
    byServer: { server: string; count: number }[];
    byClassDetail: { classDetail: string; count: number }[];
    theSixRate: { classRoot: string; theSixCount: number; total: number }[];
  }> {
    return this.usersRepo.findStats();
  }
}

function readCombatPower(armory: ArmoryData | null): number | null {
  const cpStr = armory?.ArmoryProfile?.CombatPower ?? null;
  if (!cpStr) return null;
  return parseFloat(cpStr.replace(/,/g, '')) || null;
}

function readStats(armory: ArmoryData | null): {
  statCrit: number;
  statSpec: number;
  statSwift: number;
} {
  let statCrit = 0;
  let statSpec = 0;
  let statSwift = 0;

  for (const stat of armory?.ArmoryProfile?.Stats ?? []) {
    const value = parseInt(stat.Value ?? '0', 10);
    if (stat.Type === '移섎챸') statCrit = value;
    else if (stat.Type === '?뱁솕') statSpec = value;
    else if (stat.Type === '?좎냽') statSwift = value;
  }

  return { statCrit, statSpec, statSwift };
}
