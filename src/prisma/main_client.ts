// import { PrismaClient } from './generated/client';

import { PrismaClient } from '@prisma/client';

export const mainPrismaClient = new PrismaClient({
	datasources: {
		db: {
			url: 'postgresql://postgres:z8zb8jKadEACdzARhmsP@containers-us-west-165.railway.app:6983/railway',
		},
	},
});
