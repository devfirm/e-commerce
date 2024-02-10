import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../types';
declare const AccessTokenStrategy_base: new (...args: any[]) => any;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    constructor(config: ConfigService);
    validate(payload: JwtPayload): JwtPayload;
}
export {};
