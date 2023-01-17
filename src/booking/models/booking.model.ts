import { ObjectId } from 'mongodb';

export interface Booking {
  _id: ObjectId;
  startTime: Date;
  endTime: Date;
}
