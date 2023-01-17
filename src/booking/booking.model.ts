import { Module } from '@nestjs/common';
import { GetBookingService } from './services/get_booking.service';

@Module({
  providers: [GetBookingService],
})
export class BookingModel {}
