import { Module } from '@nestjs/common';
import { ClassSummaryController } from './class-summary.controller';
import { ClassSummaryService } from './class-summary.service';
import { ClassSummaryRepository } from './class-summary.repository';

@Module({
  controllers: [ClassSummaryController],
  providers: [ClassSummaryService, ClassSummaryRepository],
})
export class ClassSummaryModule {}
