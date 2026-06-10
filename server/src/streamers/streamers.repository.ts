import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { YoutubeVideoItem } from './streamers.service';

@Injectable()
export class StreamersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async upsertViewSnapshots(items: YoutubeVideoItem[], date: string) {
    for (const item of items) {
      await this.prisma.youtube_view_snapshots.upsert({
        where: {
          video_id_recorded_date: {
            video_id: item.videoId,
            recorded_date: new Date(`${date}T00:00:00.000Z`),
          },
        },
        create: {
          video_id: item.videoId,
          title: item.title,
          channel_title: item.channelTitle,
          thumbnail_url: item.thumbnailUrl,
          published_at: new Date(item.publishedAt),
          duration: item.duration,
          view_count: item.viewCount,
          recorded_date: new Date(`${date}T00:00:00.000Z`),
        },
        update: {
          view_count: item.viewCount,
        },
      });
    }
  }

  /**
   * 게시일이 최근 `days`일 이내인 영상을 video_id 기준 1건씩(최신 스냅샷의 조회수)
   * 게시일 내림차순으로 반환한다.
   *
   * youtube_view_snapshots 는 (video_id, recorded_date) 당 1행이라 같은 영상이
   * 여러 날짜로 누적된다. DISTINCT ON 으로 가장 최근에 기록된 행만 골라
   * 최신 조회수를 쓴다. 7일 창 밖으로 밀려나 더는 갱신되지 않는 영상도
   * 게시일이 7일 이내면 그대로 노출된다(= 누적 서빙).
   */
  async findRecentVideos(days: number): Promise<YoutubeVideoItem[]> {
    const rows = await this.prisma.$queryRaw<
      Array<{
        video_id: string;
        title: string;
        channel_title: string;
        thumbnail_url: string;
        published_at: Date;
        duration: string;
        view_count: bigint;
      }>
    >`
      SELECT DISTINCT ON (video_id)
        video_id,
        title,
        channel_title,
        thumbnail_url,
        published_at,
        duration,
        view_count
      FROM youtube_view_snapshots
      WHERE published_at >= NOW() - (${days}::int * INTERVAL '1 day')
      ORDER BY video_id, recorded_date DESC
    `;

    return rows
      .map((r) => ({
        videoId: r.video_id,
        title: r.title,
        channelTitle: r.channel_title,
        thumbnailUrl: r.thumbnail_url,
        publishedAt: r.published_at.toISOString(),
        duration: r.duration,
        viewCount: Number(r.view_count),
      }))
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  }

  async findViewHistory(
    days: number,
  ): Promise<{ date: string; avg: number }[]> {
    return this.prisma.$queryRaw<{ date: string; avg: number }[]>`
      SELECT
        TO_CHAR(recorded_date, 'YYYY-MM-DD') AS date,
        ROUND(AVG(view_count))::int         AS avg
      FROM youtube_view_snapshots
      WHERE recorded_date >= CURRENT_DATE - (${days}::int * INTERVAL '1 day')
      GROUP BY recorded_date
      ORDER BY recorded_date ASC
    `;
  }
}
