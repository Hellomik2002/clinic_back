import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import graphqlUploadExpress from './utils/graphql_upload/graphqlUploadExpress';
// import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress';
// /GraphQLUpload.mjs
// /graphqlUploadExpress.mjs
// /graphqlUploadKoa.mjs
// /package.json
// /processRequest.mjs
// /Upload.mjs
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use('/graphql', graphqlUploadExpress({}));

  await app.listen(3000);
}
bootstrap();
