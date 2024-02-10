import {
    Controller,
    Get,
    Post,
    Body,
    Req,
    Res,
    UseGuards,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import {   ApiOperation, ApiTags } from '@nestjs/swagger';
  import { AuthGuard } from '@nestjs/passport';
  import {  Public } from 'src/common/decorators';
  import { RefreshTokenGuard } from 'src/common/guards';
  import { Tokens } from './types';
import { Response } from 'express';
  
  @ApiTags('Auth')
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
  
    @ApiOperation({ summary: 'loginWithGoogle()' })
    @Public()
    @Get('loginWithGoogle')
    @UseGuards(AuthGuard('google'))
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async loginWithGoogle() {}
  
  
   
  
  
    @Public()
    @UseGuards(RefreshTokenGuard)
    @Post('refresh-token')
    @HttpCode(HttpStatus.OK)
    refreshTokens(@Body() refreshToken:any,@Res() res:Response): Promise<Tokens> {
      return this.authService.refreshUserTokens( refreshToken,res);
    }
  }
  