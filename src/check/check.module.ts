import { Module } from '@nestjs/common';
import { CheckResolver } from './check.resolver';

@Module({
  providers: [CheckResolver],
})
export class CheckModule {}
