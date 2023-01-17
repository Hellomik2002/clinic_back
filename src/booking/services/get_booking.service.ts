import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import 'dayjs/plugin/utc';
import { interval } from 'rxjs';

import { Booking } from '../models/booking.model';
import { WorkTime } from '../models/work_time.model';

const minuteInWeek = 10080;

@Injectable()
export class GetBookingService {
  constructor() {
    this.generateBooking([], [], new Date(), new Date());
  }

  async generateBooking(
    _workTimes: WorkTime[],
    bookings: Booking[],
    _startTime: Date,
    _endTime: Date,
    intervalInMinute: number = 10,
  ): Promise<Booking[]> {
    const workTimes = [
      ..._workTimes,
      ..._workTimes.map((e) => ({
        startTimeMinute: e.startTimeMinute + minuteInWeek,
        endTimeMinute: e.endTimeMinute + minuteInWeek,
      })),
    ];

    const startTime = _startTime;
    const endTime = _endTime;

    const dayStart = dayjs.utc(startTime);
    const dayEnd = dayjs.utc(endTime);
    const freeTimesGenerated: { startTime: Date; endTime: Date }[] = [];

    // GENERATE AVAILAIBE TIMES
    for (
      let currentStart = dayStart.clone();
      currentStart.isBefore(endTime);
      currentStart = currentStart.add(dayjs.duration(10, 'minutes'))
    ) {
      const dayWeekStart = dayStart.startOf('isoWeek');
      const startMinute = currentStart.diff(dayWeekStart, 'minutes');
      const endMinute = startMinute + intervalInMinute;
      for (let workTime of workTimes) {
        if (
          workTime.startTimeMinute <= startMinute &&
          endMinute <= workTime.endTimeMinute
        ) {
          freeTimesGenerated.push({
            startTime: currentStart.toDate(),
            endTime: currentStart.add(intervalInMinute, 'minutes').toDate(),
          });
          break;
        }
      }
    }
    const freeTimeFinish = [];
    // CUT AVAILAIBE TIMES
    for (let freeTime of freeTimesGenerated) {
      let needToAdd = true;
      for (let book of bookings) {
        const startTime = freeTime.startTime.getTime();
        const endTime = freeTime.endTime.getTime();

        const bookingStartTime = book.startTime.getTime();
        const bookingEndTime = book.endTime.getTime();

        const freeTimeInBooking =
          (bookingStartTime <= startTime && startTime <= bookingEndTime) ||
          (bookingStartTime <= endTime && endTime <= bookingEndTime);

        const bookingInFreeTime =
          (startTime <= bookingStartTime && bookingStartTime <= endTime) ||
          (startTime <= bookingEndTime && bookingEndTime <= endTime);

        if (freeTimeInBooking && bookingInFreeTime) {
          needToAdd = false;
          break;
        }
      }
      if (needToAdd) {
        freeTimeFinish.push(freeTime);
      }
    }

    return freeTimeFinish;
  }
}
