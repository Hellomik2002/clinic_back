import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field()
  fullName: string;

  @Field()
  uniqueName: string;

  @Field()
  phoneNumber: string;

  @Field()
  address: string;

  // TODO a lot
}
