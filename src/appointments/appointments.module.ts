import { Module } from '@nestjs/common';
import { AppointmentsResolver } from './appointments.resolver';

@Module({ providers: [AppointmentsResolver] })
export class AppointmentsModule {}
