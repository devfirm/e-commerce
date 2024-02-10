import { AuthService } from './auth.service';
import { Tokens } from './types';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginWithGoogle(): Promise<void>;
    refreshTokens(refreshToken: any, res: Response): Promise<Tokens>;
}
