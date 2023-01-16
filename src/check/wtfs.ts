import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CechIN {
  @Field()
  fuck: string;
}
