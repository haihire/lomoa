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
