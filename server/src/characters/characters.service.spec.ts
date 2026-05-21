import { Test, TestingModule } from '@nestjs/testing';
import { REDIS_CLIENT } from '../redis/redis.module';
import { CharactersRepository } from './characters.repository';
import { CharactersService, classifyStatBuild } from './characters.service';

describe('classifyStatBuild', () => {
  it('returns unset for total under 300', () => {
    expect(typeof classifyStatBuild(100, 100, 50)).toBe('string');
  });

  it('returns unset for total 0', () => {
    expect(typeof classifyStatBuild(0, 0, 0)).toBe('string');
  });
});

describe('CharactersService', () => {
  let service: CharactersService;
  let mockCharactersRepo: { findStatBuildRows: jest.Mock };
  let mockRedis: { get: jest.Mock; set: jest.Mock };

  beforeEach(async () => {
    mockCharactersRepo = { findStatBuildRows: jest.fn() };
    mockRedis = {
      get: jest.fn().mockResolvedValue(null),
      set: jest.fn().mockResolvedValue('OK'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharactersService,
        { provide: CharactersRepository, useValue: mockCharactersRepo },
        { provide: REDIS_CLIENT, useValue: mockRedis },
      ],
    }).compile();

    service = module.get<CharactersService>(CharactersService);
  });

  it('returns 7 stat build tabs with zero counts when DB is empty', async () => {
    mockCharactersRepo.findStatBuildRows.mockResolvedValueOnce([]);

    const result = await service.findStatBuilds();

    expect(result).toHaveLength(7);
    expect(result.every((tab) => tab.totalCount === 0)).toBe(true);
  });

  it('uses Redis cache when available', async () => {
    const cached = [{ statBuild: 'cached', totalCount: 1, items: [] }];
    mockRedis.get.mockResolvedValueOnce(JSON.stringify(cached));

    const result = await service.findStatBuilds();

    expect(result).toEqual(cached);
    expect(mockCharactersRepo.findStatBuildRows).not.toHaveBeenCalled();
  });
});
