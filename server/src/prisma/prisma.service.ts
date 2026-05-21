import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

(BigInt.prototype as unknown as Record<string, unknown>)['toJSON'] = function (
  this: bigint,
) {
  return this.toString();
};

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    const schema = process.env.PRISMA_DB_SCHEMA ?? 'public';
    if (!connectionString) {
      throw new Error('DATABASE_URL is required for PrismaService');
    }
    super({
      adapter: new PrismaPg({ connectionString }, { schema }),
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
