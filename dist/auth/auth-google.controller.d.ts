import { AuthService } from './auth.service';
export declare class AuthGoogleController {
    private readonly authService;
    constructor(authService: AuthService);
    googleAuthRedirect(req: any, res: any): Promise<any>;
}
