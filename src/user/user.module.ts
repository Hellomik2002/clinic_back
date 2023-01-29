import { Module } from '@nestjs/common';
import { AuthResolver } from './resolvert/auth.resolver';

@Module({
  providers: [AuthResolver],
})
export class UserModule {}
