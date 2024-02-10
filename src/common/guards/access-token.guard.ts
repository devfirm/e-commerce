import { ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();

    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    
    //for graphql
    const authenticationHeader = ctx.req.headers.Authorization || ctx.req.headers.authorization
    
    
    
    if(authenticationHeader){
    let req= ctx.req.body.query
    let first = req.toString().split('{')[1].trim()
    console.log(first.split('(')[0])
      try {
        const token = authenticationHeader.split(' ')[1]
        const user:any = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        ctx.user = user
        ctx.UserId = user.id
        return true
      } catch (error) {
        throw new HttpException("Invalid token: " + error.message, HttpStatus.UNAUTHORIZED)  
      }
    }

    if (isPublic) return true;
    else throw new HttpException("Unauthorized ", HttpStatus.UNAUTHORIZED)

  }
}