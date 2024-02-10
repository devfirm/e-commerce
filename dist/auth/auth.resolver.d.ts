import { AuthService } from './auth.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { LoginInput } from './dto/login-auth.input';
import { RefreshToken } from './dto/auth-refreshToken.input';
import { Response } from 'express';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    signUpUser(singUpInput: CreateAuthInput): Promise<string>;
    login(loginInput: LoginInput, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, import("../user/model/User").User> & import("../user/model/User").User & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    refreshUserTokens(refreshToken: RefreshToken, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, import("../user/model/User").User> & import("../user/model/User").User & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
