import { Controller, Get, Headers, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiExcludeEndpoint } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/common/decorators';

@Controller('oauth2')
@ApiTags('Auth')
export class AuthGoogleController {
  constructor(private readonly authService: AuthService) {}
  @ApiExcludeEndpoint()
  @Get('redirect/google')
  @Public()
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    return this.authService.googleLogin(req, res);
  }
}
