import { Module } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';
import { AdminAuthController } from './admin-auth.controller';
import { AdminSitesController } from './admin-sites.controller';
import { AdminCacheController } from './admin-cache.controller';
import { AdminCharactersController } from './admin-characters.controller';
import { AdminSyncController } from './admin-sync.controller';
import { AdminGuard, AdminWriteGuard } from './admin.guard';
import { StreamersModule } from '../streamers/streamers.module';
import { SitesModule } from '../sites/sites.module';
import { AdminMonitoringController } from './admin-monitoring.controller';
import { AdminMonitoringService } from './admin-monitoring.service';
import { DockerStatsService } from './docker-stats.service';
import { MonitoringRepository } from './repositories/monitoring.repository';
import { AdminAuthRepository } from './repositories/admin-auth.repository';
import { AdminCharactersRepository } from './repositories/admin-characters.repository';
import { AdminSyncRepository } from './repositories/admin-sync.repository';
import { AdminInvenController } from './admin-inven.controller';
import { AdminInvenRepository } from './repositories/admin-inven.repository';
import { AdminInvenCronService } from './admin-inven-cron.service';
import { AdminInvenPipelineService } from './admin-inven-pipeline.service';
import { SiteExtractorService } from './site-extractor.service';
import { SiteSuggestService } from './site-suggest.service';

@Module({
  imports: [StreamersModule, SitesModule],
  controllers: [
    AdminAuthController,
    AdminSitesController,
    AdminCacheController,
    AdminCharactersController,
    AdminSyncController,
    AdminMonitoringController,
    AdminInvenController,
  ],
  providers: [
    AdminAuthService,
    AdminGuard,
    AdminWriteGuard,
    AdminMonitoringService,
    DockerStatsService,
    MonitoringRepository,
    AdminAuthRepository,
    AdminCharactersRepository,
    AdminSyncRepository,
    AdminInvenRepository,
    AdminInvenCronService,
    AdminInvenPipelineService,
    SiteExtractorService,
    SiteSuggestService,
  ],
  exports: [AdminAuthService],
})
export class AdminModule {}
