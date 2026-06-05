import { ConfigService } from '@nestjs/config';
import { ClassSummaryRepository } from './class-summary.repository';
import { ClassSummaryService } from './class-summary.service';

function createService(localDisable = 'true') {
  const repo: Partial<Record<keyof ClassSummaryRepository, jest.Mock>> = {
    count: jest.fn(),
    exists: jest.fn(),
    upsert: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  const config = {
    get: jest.fn((key: string) => {
      const values: Record<string, string | undefined> = {
        GEMINI_API_KEY: 'dummy-key',
        LOCAL_DISABLE_QUOTA_APIS: localDisable,
        // service는 isClassSummaryDisabled(DISABLE_CLASS_SUMMARY)로 판단
        DISABLE_CLASS_SUMMARY: localDisable,
      };
      return values[key];
    }),
  } as unknown as ConfigService;

  const service = new ClassSummaryService(repo as never, config);
  return { service, repo };
}

describe('ClassSummaryService', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('skips initial crawling when quota APIs are disabled', async () => {
    const { service, repo } = createService();
    const runAllSpy = jest.spyOn(service, 'runAll').mockResolvedValue();

    await service.onModuleInit();

    expect(repo.count).not.toHaveBeenCalled();
    expect(runAllSpy).not.toHaveBeenCalled();
  });

  it('skips scheduled crawling when quota APIs are disabled', async () => {
    const { service } = createService();
    const runAllSpy = jest.spyOn(service, 'runAll').mockResolvedValue();

    await service.scheduledRun();

    expect(runAllSpy).not.toHaveBeenCalled();
  });

  it('manual runAll exits early when quota APIs are disabled', async () => {
    const { service } = createService();
    const processSpy = jest.spyOn(service as never, 'processClass');

    await service.runAll();

    expect(processSpy).not.toHaveBeenCalled();
  });
});
