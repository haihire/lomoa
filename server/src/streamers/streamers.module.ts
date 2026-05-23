import { Module } from '@nestjs/common';
import { StreamersController } from './streamers.controller';
import { StreamersService } from './streamers.service';
import { RedisModule } from '../redis/redis.module';
import { StreamersRepository } from './streamers.repository';

@Module({
  imports: [RedisModule],
  controllers: [StreamersController],
  providers: [StreamersService, StreamersRepository],
  exports: [StreamersService],
})
export class StreamersModule {}
