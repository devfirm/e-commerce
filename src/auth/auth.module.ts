import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { AccessTokenStrategy, GoogleStrategy } from './strategies';
import { AuthController } from './auth.controller';
import { AuthGoogleController } from './auth-google.controller';

@Module({
  imports: [ 
    PassportModule,
     JwtModule.register({
    secret: process.env.ACCESS_TOKEN_SECRET, // Replace with your own secret key
    signOptions: { expiresIn: '1h' }, // Token expiration time
  }),
],
controllers: [AuthController, AuthGoogleController],
  providers: [AuthResolver, AuthService, AccessTokenStrategy,GoogleStrategy,]
})
export class AuthModule {}
