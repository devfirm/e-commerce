import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './model/User';
import { FilterQuery, Model } from 'mongoose';
import filterQuery from 'src/common/utils/filterQuery';
import { UserListOption } from './dto/request-dto/option-user.input';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}  

  async getUsers(options: UserListOption): Promise<{ totalUsers: number; users: User[] }> {
    const { page, limit, sort, filter, filterOperator } = options;
    
    let filterData = filterQuery(filter, filterOperator)
    
    const [users, totalUsers] = await Promise.all([
      this.userModel
        .find(filterData)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort(
          Object(sort)
        ),
      this.userModel.countDocuments(filterData),
    ]);

    return { totalUsers, users };
  }

  async findOneUser(id: string) {
    const user = await this.userModel.findById(id);
    if(!user){
      throw new NotFoundException(`User not found !`);
    }
    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
