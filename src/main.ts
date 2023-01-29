import { NestFactory } from '@nestjs/core';
import dayjs from 'dayjs';
import UTCPlugin from 'dayjs/plugin/utc';
import ISOPlugin from 'dayjs/plugin/isoWeek';
import IsBetweenPlugin from 'dayjs/plugin/isBetween';
import IsSameOrAfterPlugin from 'dayjs/plugin/isSameOrAfter';
import isSameOrBeforePlugin from 'dayjs/plugin/isSameOrBefore';
import DurationPlugin from 'dayjs/plugin/duration';

import { AppModule } from './app.module';
import graphqlUploadExpress from './utils/graphql_upload/graphqlUploadExpress';
import { from } from 'rxjs';
import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient();

async function bootstrap() {
  dayjs.extend(UTCPlugin);
  dayjs.extend(ISOPlugin);
  dayjs.extend(IsBetweenPlugin);
  dayjs.extend(IsSameOrAfterPlugin);
  dayjs.extend(isSameOrBeforePlugin);
  dayjs.extend(DurationPlugin);

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use('/graphql', graphqlUploadExpress({}));

  await app.listen(3000);
}
bootstrap();
