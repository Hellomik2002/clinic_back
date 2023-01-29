import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { User } from 'src/@generated/user/user.model';
import { prismaClient } from 'src/main';

@Resolver()
export class AuthResolver {
  @Query(() => String)
  async check() {
    return '';
  }

  @Mutation(() => Boolean)
  async createUser(
    @Args('userInput', {
      type: () => UserCreateInput,
    })
    userInput: UserCreateInput,
  ): Promise<boolean> {
    const data: User | null = await prismaClient.user.findFirst({
      where: {
        OR: [
          {
            email: userInput.email,
          },
          {
            phoneNumber: userInput.phoneNumber,
          },
          {
            uniqueName: userInput.uniqueName,
          },
        ],
      },
    });
    if (data != null) throw 'User already exsist';
    console.log(data);

    return true;
  }

  @Mutation(() => User)
  async createUserVerify(
    @Args('userInput', {
      type: () => UserCreateInput,
    })
    userInput: UserCreateInput,
    @Args('code', {
      type: () => String,
    })
    code,
  ): Promise<User> {
    const _user = prismaClient.user.create({
      data: { ...userInput },
    });
    return _user;
  }
}
