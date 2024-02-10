import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
// import { Auth } from './entities/auth.entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { LoginInput } from './dto/login-auth.input';
import { LoginResponse } from './entities/auth.entity';
import { RefreshToken } from './dto/auth-refreshToken.input';
import { Public } from 'src/common/decorators';
import { Response } from 'express';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  @Public()
  signUpUser(@Args('singUpInput') singUpInput: CreateAuthInput) {    
    return this.authService.singUp(singUpInput);
  }

  @Mutation(()=> LoginResponse)
  @Public()
  login(@Args('loginInput') loginInput: LoginInput,@Context('res') res: Response){
    return this.authService.login(loginInput,res);
  }

  @Public()
  @Mutation(()=>  LoginResponse)
  refreshUserTokens(@Args('refreshToken') refreshToken: RefreshToken,@Context('res') res: Response){
    return this.authService.refreshUserTokens(refreshToken,res);
  }

}
