import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('cal-com-webhook')
export class CalComWebhookController {
	//   post /webhook/cal-com printing body of the request

	@Post()
	async postCalComWebhook(@Body() payload: any) {
		console.log(payload);

		// is unique email
		// if unique create new account with medcart
		return 'ok';
	}
}
