import { CreateAuthInput } from './dto/create-auth.input';
import { UserDocument } from 'src/user/model/User';
import { Model } from 'mongoose';
import { SendGridService } from '@anchan828/nest-sendgrid';
import { LoginInput } from './dto/login-auth.input';
import { JwtPayload, Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './dto/auth-refreshToken.input';
import { Response } from 'express';
export declare class AuthService {
    private userModel;
    private jwtService;
    private readonly sendGrid;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService, sendGrid: SendGridService);
    singUp(createAuthInput: CreateAuthInput): Promise<string>;
    login(loginData: LoginInput, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, import("src/user/model/User").User> & import("src/user/model/User").User & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    signToken(args: {
        userId: string;
        email: string;
        time?: number;
    }): Promise<string>;
    googleLogin(req: any, res: any): Promise<any>;
    refreshUserTokens(_refreshToken: RefreshToken, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, import("src/user/model/User").User> & import("src/user/model/User").User & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getTokens(jwtPayload: JwtPayload): Promise<Tokens>;
}
