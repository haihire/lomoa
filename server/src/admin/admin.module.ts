import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminAuthService } from './admin-auth.service';
import { AdminAuthController } from './admin-auth.controller';
import { AdminSitesController } from './admin-sites.controller';
import { AdminCacheController } from './admin-cache.controller';
import { AdminGuard, AdminWriteGuard } from './admin.guard';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>(
          'ADMIN_JWT_SECRET',
          'change-me-in-production',
        ),
        signOptions: { expiresIn: '8h' },
      }),
    }),
  ],
  controllers: [
    AdminAuthController,
    AdminSitesController,
    AdminCacheController,
  ],
  providers: [AdminAuthService, AdminGuard, AdminWriteGuard],
  exports: [AdminAuthService],
})
export class AdminModule {}
