import { Test, TestingModule } from '@nestjs/testing';
import { CalComWebhookController } from './cal-com-webhook.controller';

describe('CalComWebhookController', () => {
  let controller: CalComWebhookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalComWebhookController],
    }).compile();

    controller = module.get<CalComWebhookController>(CalComWebhookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
