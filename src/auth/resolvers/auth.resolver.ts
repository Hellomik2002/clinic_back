import { CACHE_MANAGER, Inject } from '@nestjs/common';
import {
	Resolver,
	Mutation,
	Args,
	Parent,
	ResolveField,
} from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-core';
import { Cache } from 'cache-manager';
import { randomUUID } from 'crypto';

import { User } from 'src/@generated/user/user.model';
import { prismaClient } from 'src/main';
import { calPrismaClient } from 'src/prisma/client_cal';
import {
	LoginInput,
	PhoneCodeInput,
	PhoneLoginInput,
} from '../dto/login.input';
import { RefreshTokenInput } from '../dto/refresh-token.input';
import { SignupInput } from '../dto/signup.input';
import { Auth } from '../models/auth.model';
import { Token } from '../models/token.model';
import { AuthService } from '../services/auth.service';
import { makeNumber, SMSService } from '../services/sms.service';

@Resolver(() => Auth)
export class AuthResolver {
	cashedCode;
	constructor(
		@Inject(CACHE_MANAGER) private cacheManager: Cache,
		private readonly auth: AuthService,
		private readonly smsService: SMSService,
	) {}

	@Mutation(() => Boolean)
	async createFstBooking() {
		const check = await calPrismaClient.booking.create({
			// data: new Date(),
			data: {
				startTime: new Date('2023-02-15T05:30:00.000Z'),
				endTime: new Date('2023-02-15T04:00:00.000Z'),
				title: 'THE WORLD',
				uid: randomUUID(),
				eventTypeId: 20,
				userId: 14,
			},
		});
		console.log(check);
	}

	@Mutation(() => Boolean)
	async signup(@Args('data') data: SignupInput): Promise<boolean> {
		data.address = data.address.trim();
		data.email = data.email.toLowerCase().trim();
		data.fullName = data.fullName.trim();
		data.phoneNumber = data.phoneNumber.trim();
		data.uniqueName = data.uniqueName.trim();

		let user: User | null = null;
		try {
			user = await prismaClient.user.findFirstOrThrow({
				where: {
					OR: [
						{ email: data.email },
						{ phoneNumber: data.phoneNumber },
						{ uniqueName: data.uniqueName },
					],
				},
			});
		} catch (e) {}
		if (user != null) throw new ApolloError('User exist');

		const val = `${makeNumber(4)}`;
		console.log(val);
		const keyCache =
			data.email + data.fullName + data.uniqueName + data.phoneNumber;
		this.cacheManager.set(keyCache, val, 1000 * 60 * 2);

		this.smsService.sendCode(val, data.phoneNumber);

		return true;
	}

	@Mutation(() => Auth)
	async verifyCode(
		@Args('data') data: SignupInput,
		@Args('code') code: string,
	): Promise<Token> {
		data.address = data.address.trim();
		data.email = data.email.toLowerCase().trim();
		data.fullName = data.fullName.trim();
		data.phoneNumber = data.phoneNumber.trim();
		data.uniqueName = data.uniqueName.trim();

		const keyCache =
			data.email + data.fullName + data.uniqueName + data.phoneNumber;

		const val = await this.cacheManager.get(keyCache);
		if (val != code) throw new ApolloError('Code is wrong');
		const { accessToken, refreshToken } = await this.auth.createUser(data);
		return {
			accessToken,
			refreshToken,
		};
	}

	@Mutation(() => Token)
	async login(@Args('data') { uniqueName, password }: LoginInput) {
		const { accessToken, refreshToken } = await this.auth.login(
			uniqueName.toLowerCase(),
			password,
		);
		return {
			accessToken,
			refreshToken,
		};
	}

	@Mutation(() => Boolean)
	async loginBySms(@Args('data') { phoneNumber }: PhoneLoginInput) {
		const val = `${makeNumber(4)}`;
		console.log(val);
		const keyCache = phoneNumber;
		this.cacheManager.set(keyCache, val, 1000 * 60 * 2);

		this.smsService.sendCode(val, phoneNumber);
		return true;
	}

	async loginVerify(@Args('data') { phoneNumber, code }: PhoneCodeInput) {
		const keyCache = phoneNumber;

		const val = await this.cacheManager.get(keyCache);
		if (val != code) throw new ApolloError('Code is wrong');
		const userId = (await this.auth.getUserFromPhoneNumber(phoneNumber)).id;

		const { accessToken, refreshToken } = await this.auth.generateTokens({
			userId,
		});
		return {
			accessToken,
			refreshToken,
		};
	}

	@Mutation(() => Token)
	async refreshToken(@Args() { token }: RefreshTokenInput) {
		return this.auth.refreshToken(token);
	}

	@ResolveField('user', () => User)
	async user(@Parent() auth: Auth) {
		return await this.auth.getUserFromToken(auth.accessToken);
	}
}
