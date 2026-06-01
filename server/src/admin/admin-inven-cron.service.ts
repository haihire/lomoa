import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AdminInvenPipelineService } from './admin-inven-pipeline.service';

@Injectable()
export class AdminInvenCronService {
  private readonly logger = new Logger(AdminInvenCronService.name);

  constructor(private readonly pipeline: AdminInvenPipelineService) {}

  /** 매일 새벽 3시(KST) 자동 실행 — 어제 날짜를 파이프라인 서비스에 위임 */
  @Cron('0 3 * * *', { timeZone: 'Asia/Seoul' })
  async runNightlyPipeline() {
    this.logger.log('야간 인벤 파이프라인 시작');
    const result = await this.pipeline.run();
    if (!result.started) {
      this.logger.warn(`파이프라인 건너뜀: ${result.reason}`);
    }
  }
}
