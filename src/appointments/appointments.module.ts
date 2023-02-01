import { Module } from '@nestjs/common';
import { AppointmentsResolver } from './resolver/appointments.resolver';

@Module({ providers: [AppointmentsResolver] })
export class AppointmentsModule {}
