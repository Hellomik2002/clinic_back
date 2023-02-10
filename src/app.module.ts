import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from './users/users.module';
import { HttpModule } from '@nestjs/axios';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';
import config from './common/configs/config';

@Module({
	imports: [
		{ ...HttpModule.register({}), global: true },
		{ ...CacheModule.register(), global: true },
		ConfigModule.forRoot({
			isGlobal: true,
			load: [config],
		}),
		PrismaModule.forRoot({
			isGlobal: true,
		}),
		MongooseModule.forRoot(process.env.DATABASE_URL, {
			dbName: process.env.DATABASE_NAME,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			debug: true,
			playground: false,
			autoSchemaFile: true,
			sortSchema: true,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
		}),
		AuthModule,
		UserModule,
		AppointmentsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
