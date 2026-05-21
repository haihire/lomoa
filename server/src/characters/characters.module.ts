import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { RedisModule } from '../redis/redis.module';
import { CharactersRepository } from './characters.repository';

@Module({
  imports: [RedisModule],
  controllers: [CharactersController],
  providers: [CharactersService, CharactersRepository],
})
export class CharactersModule {}
