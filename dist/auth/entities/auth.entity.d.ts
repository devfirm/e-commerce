import { User } from 'src/user/entities/user.entity';
export declare class LoginResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}
