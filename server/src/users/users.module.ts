import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LostarkModule } from '../lostark/lostark.module';
import { UsersRepository } from './users.repository';

@Module({
  imports: [LostarkModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
