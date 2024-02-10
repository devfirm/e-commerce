import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { AccessTokenStrategy } from 'src/auth/strategies/access-token.strategy';

@Module({
  providers: [UserResolver,AccessTokenStrategy, UserService]
})
export class UserModule {}

