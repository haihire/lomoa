import { Module } from '@nestjs/common';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import { KakaoModule } from '../kakao/kakao.module';
import { SitesRepository } from './sites.repository';

@Module({
  imports: [KakaoModule],
  controllers: [SitesController],
  providers: [SitesService, SitesRepository],
  exports: [SitesService, SitesRepository],
})
export class SitesModule {}
