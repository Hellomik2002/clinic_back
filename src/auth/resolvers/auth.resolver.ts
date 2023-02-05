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
import { UserCreateInput } from 'src/@generated/user/user-create.input';

import { User } from 'src/@generated/user/user.model';
import { prismaClient } from 'src/main';
import { LoginInput } from '../dto/login.input';
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
	async signup(@Args('data') data: UserCreateInput): Promise<boolean> {
		data.email = data.email.toLowerCase();
		// 300 * 1000 = 5 min
		const CACHE_TTL = 300 * 1000;
		const user = await prismaClient.user.findFirst({
			where: {
				email: data.email,
				phoneNumber: data.phoneNumber,
				uniqueName: data.uniqueName,
			},
		});
		if (user != null) throw new ApolloError('User exist');
		const val = `${makeNumber(4)}`;
		console.log('DEBUG | SMS_CODE: ', val);
		await this.cacheManager.set(
			data.email + data.fullName + data.uniqueName + data.phoneNumber,
			val,
			CACHE_TTL,
		);

		await this.smsService.sendCode(val, data.phoneNumber);

		return true;
	}

	@Mutation(() => Auth)
	async verifyCode(
		@Args('data') data: UserCreateInput,
		@Args('code') code: string,
	): Promise<Token> {
		data.email = data.email.toLowerCase();
		const val = await this.cacheManager.get(
			data.email + data.fullName + data.uniqueName + data.phoneNumber,
		);
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

	@Mutation(() => Token)
	async refreshToken(@Args() { token }: RefreshTokenInput) {
		return this.auth.refreshToken(token);
	}

	@ResolveField('user', () => User)
	async user(@Parent() auth: Auth) {
		return await this.auth.getUserFromToken(auth.accessToken);
	}
}
