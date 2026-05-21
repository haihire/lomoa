import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { AdminSyncController } from './admin-sync.controller';

type MockSyncRepo = {
  truncate: jest.Mock;
  insertRows: jest.Mock;
  count: jest.Mock;
  readChunk: jest.Mock;
};

function createController(nodeEnv = 'production') {
  const repo: MockSyncRepo = {
    truncate: jest.fn(),
    insertRows: jest.fn(),
    count: jest.fn(),
    readChunk: jest.fn(),
  };

  const config = {
    get: jest.fn((key: string) => {
      const values: Record<string, string | undefined> = {
        NODE_ENV: nodeEnv,
        SYNC_TARGET_API_URL: 'https://remote.example.com',
      };
      return values[key];
    }),
  } as unknown as ConfigService;

  const authService = {
    login: jest.fn(),
  } as never;

  const controller = new AdminSyncController(
    repo as never,
    config,
    authService,
  );
  return { controller, repo };
}

function mockResponse(body: string) {
  return {
    ok: true,
    status: 200,
    text: () => Promise.resolve(body),
  } as Response;
}

function requestUrl(input: RequestInfo | URL | undefined): string {
  if (typeof input === 'string') return input;
  if (input instanceof URL) return input.href;
  if (input && typeof input === 'object' && 'url' in input) {
    const url = input.url;
    return typeof url === 'string' ? url : '';
  }
  return '';
}

function collectEvents<T>(stream: Observable<T>) {
  return new Promise<T[]>((resolve, reject) => {
    const items: T[] = [];
    stream.subscribe({
      next: (value) => items.push(value),
      error: reject,
      complete: () => resolve(items),
    });
  });
}

describe('AdminSyncController', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('chunkRead uses the seq column from the configured table spec', async () => {
    const { controller, repo } = createController();
    repo.readChunk.mockResolvedValueOnce([
      {
        seq: 42,
        name: 'site-a',
        href: 'https://example.com',
        category: 'news',
        description: null,
        icon: null,
        is_active: 1,
        last_title: 'title',
        last_status: 'ok',
        checked_at: '2025-01-01 00:00:00',
      },
    ]);

    const result = await controller.chunkRead('sites', {
      afterSeq: 5,
      limit: 100,
    });

    expect(repo.readChunk).toHaveBeenCalledWith(
      expect.objectContaining({ table: 'loa_sites' }),
      5,
      25,
    );
    expect(result).toEqual({
      rows: [
        [
          42,
          'site-a',
          'https://example.com',
          'news',
          null,
          null,
          1,
          'title',
          'ok',
          '2025-01-01 00:00:00',
        ],
      ],
      lastSeq: 42,
    });
  });

  it('prod-to-local sends local rows to the remote target', async () => {
    const { controller, repo } = createController('production');
    const fetchSpy = jest
      .spyOn(globalThis, 'fetch')
      .mockImplementation((input: RequestInfo | URL) => {
        const url = requestUrl(input);
        if (url.endsWith('/begin')) {
          return Promise.resolve(mockResponse('{"ok":true}')) as never;
        }
        if (url.endsWith('/chunk')) {
          return Promise.resolve(mockResponse('{"inserted":2}')) as never;
        }
        if (url.endsWith('/auth/logout')) {
          return Promise.resolve(mockResponse('{"ok":true}')) as never;
        }
        return Promise.reject(new Error(`unexpected fetch: ${url}`)) as never;
      });

    jest
      .spyOn(globalThis, 'setTimeout')
      .mockImplementation((cb: TimerHandler): never => {
        if (typeof cb === 'function') {
          const fn = cb as () => void;
          fn();
        }
        return 0 as never;
      });

    repo.count.mockResolvedValueOnce(2);
    repo.readChunk
      .mockResolvedValueOnce([
        {
          seq: 1,
          name: 'site-a',
          href: 'https://example.com/a',
          category: 'news',
          description: 'desc-a',
          icon: 'icon-a',
          is_active: 1,
          last_title: 'title-a',
          last_status: 'ok',
          checked_at: '2025-01-01 00:00:00',
        },
        {
          seq: 2,
          name: 'site-b',
          href: 'https://example.com/b',
          category: 'news',
          description: 'desc-b',
          icon: 'icon-b',
          is_active: 1,
          last_title: 'title-b',
          last_status: 'ok',
          checked_at: '2025-01-01 00:00:01',
        },
      ])
      .mockResolvedValueOnce([]);

    const events = await collectEvents(
      controller.run('sites', 'remote-session', 'prod-to-local'),
    );

    expect(repo.count).toHaveBeenCalledTimes(1);
    expect(repo.readChunk).toHaveBeenCalledTimes(2);
    expect(fetchSpy).toHaveBeenCalledTimes(3);
    expect(requestUrl(fetchSpy.mock.calls[0]?.[0])).toContain('/begin');
    expect(requestUrl(fetchSpy.mock.calls[1]?.[0])).toContain('/chunk');
    expect(requestUrl(fetchSpy.mock.calls[2]?.[0])).toContain('/auth/logout');
    expect(events.some((event) => event.type === 'done')).toBe(true);
  });
});
