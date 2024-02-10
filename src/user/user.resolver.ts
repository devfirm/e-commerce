import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

import { ExecutionContext, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/common/guards';
import { GetCurrentUserId, Public } from 'src/common/decorators';
import { AllUserResponse } from './dto/response-dto/all-user-response'; 
import { UserListOption } from './dto/request-dto/option-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}


  @Query(() => AllUserResponse, { name: 'allUser' })
   allUser(@Args('option') option: UserListOption,@Context('UserId') id: any) {
    return  this.userService.getUsers(option);
  }

  @Query(() => User, { name: 'userDetails' })
  findOneUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOneUser(id);
  }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.userService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.remove(id);
  // }
}
