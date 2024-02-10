import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../user/model/User';

@Injectable()
export class AccessPermissionGuard implements CanActivate {
  jwtService: any;
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: any = await this.userModel
      .findById(request.user.id)
      .populate('userRole');

    if (user?.roleType == 0) {
      return true;
    } else {
      if (
        !user?.userRole?.permissions?.includes(request.route.path.split('/')[2])
      ) {
        throw new HttpException(
          'You do not have permission to access this resource',
          HttpStatus.FORBIDDEN,
        );
      }
      return true;
    }
  }
}
