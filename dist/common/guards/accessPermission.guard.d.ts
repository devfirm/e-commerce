import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../../user/model/User';
export declare class AccessPermissionGuard implements CanActivate {
    private readonly userModel;
    jwtService: any;
    constructor(userModel: Model<User>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
