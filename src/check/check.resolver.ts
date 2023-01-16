import { Args, Field, InputType, Query, Resolver } from '@nestjs/graphql';
import GraphQLUpload from 'src/utils/graphql_upload/GraphQLUpload';
import { FileUpload } from 'src/utils/graphql_upload/Upload';
import { CechIN } from './wtfs';
// import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class CheckResolver {
  @Query(() => String)
  async fast(
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: Promise<FileUpload>,
    @Args('dwa', {
      type: () => CechIN,
    })
    cechIN: CechIN,
  ): Promise<string> {
    console.log(file);
    return 'The WOLRD';
  }
}
