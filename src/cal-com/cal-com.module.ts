import { Module } from '@nestjs/common';
import { CalComWebhookController } from './cal-com-webhook/cal-com-webhook.controller';
import { CalComAccountManagerService } from './cal-com-account-manager/cal-com-account-manager.service';

@Module({
	controllers: [CalComWebhookController],
	providers: [CalComAccountManagerService],
})
export class CalComModule {}
