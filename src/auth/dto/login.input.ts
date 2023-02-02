import { IsNotEmpty, MinLength } from 'class-validator';
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
