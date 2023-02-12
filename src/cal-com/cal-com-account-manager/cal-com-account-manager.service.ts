import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PasswordService } from 'src/auth/services/password.service';
import { CalComAccountSignUpDto } from './dto/createCalAccountDto';

@Injectable()
export class CalComAccountManagerService {
	// inject the config service here
	constructor(
		private readonly configService: ConfigService,
		private readonly passwordService: PasswordService,
	) {}

	// create a function to get the API key
	createCalAccount(dto: CalComAccountSignUpDto) {
		const calcomAppUrl = this.configService.get('CAL_COM_APP_URL');
		const calComApi = calcomAppUrl + '/api/auth/signup';

		return fetch(calComApi, {
			body: JSON.stringify({
				...dto,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
	}

	private;
}
