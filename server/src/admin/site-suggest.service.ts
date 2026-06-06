import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';
import * as cheerio from 'cheerio';

export interface SiteSuggestion {
  name: string;
  category: string;
  description: string;
  icon: string;
}

// 사이트 관리에서 쓰는 카테고리와 결을 맞춘 추천 범위
const CATEGORIES = ['정보', '커뮤니티', '거래', '방송', '공략', '도구', '기타'];

interface SiteMeta {
  title: string;
  description: string;
  ogImage: string;
}

/**
 * 추천 후보(사이트)에 대해 Gemini로 name/category/description/icon을 생성한다.
 * 자동 실행 없음 — 관리자가 모달에서 버튼을 누를 때만 호출되므로 토큰은 그때만 소모된다.
 * (GEMINI_API_KEY가 없으면 비활성.)
 */
@Injectable()
export class SiteSuggestService {
  private readonly logger = new Logger(SiteSuggestService.name);
  private readonly genAI: GoogleGenerativeAI | null;

  constructor(private readonly config: ConfigService) {
    const apiKey = this.config.get<string>('GEMINI_API_KEY');
    this.genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
    if (!apiKey) {
      this.logger.warn('GEMINI_API_KEY 미설정 — 사이트 AI 추천 비활성화');
    }
  }

  /** 사이트 메타를 fetch해 Gemini로 추천 필드를 생성한다. */
  async suggest(input: { url: string; domain: string }): Promise<SiteSuggestion> {
    if (!this.genAI) {
      throw new ServiceUnavailableException(
        'GEMINI_API_KEY가 설정되지 않았습니다',
      );
    }

    const meta = await this.fetchMeta(input.url);

    const model = this.genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: { responseMimeType: 'application/json' },
    });

    const prompt = [
      '너는 로스트아크(게임) 관련 웹사이트를 분류하는 도우미야.',
      '아래 사이트 정보를 보고 한국어로 추천해서 JSON 객체만 출력해.',
      '- name: 사이트의 간결한 이름 (한국어 또는 영문)',
      `- category: 반드시 다음 중 하나 — ${CATEGORIES.join(', ')}`,
      '- description: 어떤 사이트인지 30자 이내 한 문장',
      '- icon: 사이트 대표 로고/og:image의 절대 URL. 확실하지 않으면 빈 문자열 ""',
      'JSON 키는 name, category, description, icon 네 개만.',
      '',
      `도메인: ${input.domain}`,
      `URL: ${input.url}`,
      meta.title ? `페이지 제목: ${meta.title}` : '',
      meta.description ? `메타 설명: ${meta.description}` : '',
      meta.ogImage ? `og:image: ${meta.ogImage}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    let raw: string;
    try {
      const result = await model.generateContent(prompt);
      raw = result.response.text();
    } catch (e) {
      const msg = e instanceof Error ? e.message : '알 수 없는 오류';
      throw new ServiceUnavailableException(`Gemini 호출 실패: ${msg}`);
    }

    const parsed = this.parse(raw);
    // icon fallback: Gemini → og:image → google favicon
    const icon =
      parsed.icon?.trim() ||
      meta.ogImage ||
      `https://www.google.com/s2/favicons?domain=${input.domain}&sz=64`;

    return {
      name: parsed.name?.trim() || input.domain,
      category: parsed.category?.trim() || '기타',
      description: parsed.description?.trim() || '',
      icon,
    };
  }

  private parse(raw: string): Partial<SiteSuggestion> {
    try {
      const cleaned = raw.replace(/```json\s*|\s*```/g, '').trim();
      return JSON.parse(cleaned) as Partial<SiteSuggestion>;
    } catch {
      this.logger.warn(`Gemini JSON 파싱 실패: ${raw.slice(0, 120)}`);
      return {};
    }
  }

  /** 사이트 메타(title/description/og:image) 추출. 실패해도 빈 값 반환(추천은 진행). */
  private async fetchMeta(url: string): Promise<SiteMeta> {
    try {
      const res = await axios.get<string>(url, {
        timeout: 8000,
        maxContentLength: 3 * 1024 * 1024,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
          'Accept-Language': 'ko-KR,ko;q=0.9',
        },
      });
      const $ = cheerio.load(res.data);
      const title =
        $('title').first().text().trim() ||
        $('meta[property="og:title"]').attr('content')?.trim() ||
        '';
      const description =
        $('meta[name="description"]').attr('content')?.trim() ||
        $('meta[property="og:description"]').attr('content')?.trim() ||
        '';
      const ogImage =
        $('meta[property="og:image"]').attr('content')?.trim() || '';
      return { title, description, ogImage };
    } catch {
      this.logger.debug(`사이트 메타 추출 실패 — 도메인만으로 추천: ${url}`);
      return { title: '', description: '', ogImage: '' };
    }
  }
}
