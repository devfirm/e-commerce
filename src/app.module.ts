import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { UserModule } from './user/user.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from './common/guards';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    SendGridModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        apikey: configService.get('SENDGRIDE_KEY'),
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground:true,
      // typePaths: ['./**/*.graphql'],
      autoSchemaFile: true,
      definitions:{
        path: join(process.cwd(),'src/dataType.ts'),
      },
      context: ({ req, res }) => ({ req, res })
    }),
    DatabaseModule,
    AuthModule,
    UserModule,

  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
    AccessTokenGuard
    // ,SocketGateway
  ],
})
export class AppModule {}
