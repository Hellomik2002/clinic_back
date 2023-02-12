import { Test, TestingModule } from '@nestjs/testing';
import { CalComAccountManagerService } from './cal-com-account-manager.service';

describe('CalComAccountManagerService', () => {
  let service: CalComAccountManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalComAccountManagerService],
    }).compile();

    service = module.get<CalComAccountManagerService>(CalComAccountManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
