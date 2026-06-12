import { Controller, Get, Header, Query } from '@nestjs/common';
import { StreamersService } from './streamers.service';

@Controller('api/streamers')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  /**
   * GET /api/streamers?pageToken=xxx
   * 로스트아크 최신 동영상 검색 (1시간 미만, Redis 10분 캐시)
   */
  @Get()
  searchVideos(@Query('pageToken') pageToken?: string) {
    return this.streamersService.searchVideos(pageToken);
  }

  /**
   * GET /api/streamers/popular
   * 로스트아크 최근 7일 동영상 게시일순 (Redis 4시간 캐시)
   */
  @Get('popular')
  // s-maxage 5분 — 관리자 삭제(숨김)가 홈/CDN에 빨리 반영되도록.
  // admin은 캐시버스터로 즉시 갱신되므로 영향 없음.
  @Header('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=300')
  searchPopular(
    @Query('offset') offsetRaw?: string,
    @Query('limit') limitRaw?: string,
  ) {
    const offset = Number.parseInt(offsetRaw ?? '0', 10);
    const limit = Number.parseInt(limitRaw ?? '0', 10);
    return this.streamersService.searchPopularVideos(
      Number.isNaN(offset) ? 0 : offset,
      Number.isNaN(limit) ? 0 : limit,
    );
  }

  /**
   * GET /api/streamers/view-history?days=30
   * 날짜별 평균 조회수 히스토리 (DB 기반)
   */
  @Get('view-history')
  getViewHistory(@Query('days') daysRaw?: string) {
    const days = Number.parseInt(daysRaw ?? '30', 10);
    return this.streamersService.getViewHistory(Number.isNaN(days) ? 30 : days);
  }
}
