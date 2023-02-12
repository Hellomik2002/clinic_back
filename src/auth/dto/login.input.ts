import { IsNotEmpty, Length, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
	@Field()
	uniqueName: string;

	@Field()
	@IsNotEmpty()
	@MinLength(8)
	password: string;
}

@InputType()
export class PhoneLoginInput {
	@Field()
	phoneNumber: string;
}

@InputType()
export class PhoneCodeInput {
	@Field()
	phoneNumber: string;

	@Field()
	@IsNotEmpty()
	@Length(4)
	code: string;
}
