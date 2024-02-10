import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';
import { UserDocument } from 'src/user/model/User';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SendGridService } from '@anchan828/nest-sendgrid';
import { uid } from 'uid';
import { LoginInput } from './dto/login-auth.input';
import { JwtPayload,Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './dto/auth-refreshToken.input';
import { Response } from 'express';



@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private readonly sendGrid: SendGridService,
    ) {}

  async singUp(createAuthInput: CreateAuthInput) {
    const { email, password,firstName,lastName} = createAuthInput;
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }
    const pass = password || uid()
    const hashPassword = await bcrypt.hash( pass, 11);
    createAuthInput.password = hashPassword;
    const user = await this.userModel.create(createAuthInput);

    // if(!password) {
       await this.sendGrid.send({
      to: email,
      from: 'noreply@devfirmltd.com',
      subject: 'Welcome to Co-MS',
      text: `hello ${firstName} ${lastName}, 
             Welcome to Co-MS . 
             ${password?`email: ${email}
                        password: ${pass}   `:""}`,
    });
    // }

   
    return 'User Created successfully on Co-MS';
  }

  async login(loginData: LoginInput,res: Response){
    const { email, password } = loginData;
    const user = await this.userModel.findOne({ email });
    console.log("🚀 ~ file: auth.service.ts:50 ~ AuthService ~ login ~ user:", user)

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    const tokens = await this.getTokens({
      id: user.id || user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    });
    user.set('refreshToken', tokens.refreshToken);
    await user.save();

    if (!tokens) {
      throw new ForbiddenException('Could not sign in');
    }
    res.cookie('refreshtoken', tokens.refreshToken, 
        {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 // 7 days
        })
    return { user, ...tokens };
  }

  async signToken(args: { userId: string; email: string; time?: number }) {
    const payload = {
      id: args.userId,
      email: args.email,
    };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: args.time || 30 * 60 * 60 * 1000,
    });

    return token;
  }


  async googleLogin(req, res) {
    if (!req.user) {
      return 'No user from google';
    }
    const { email ,firstName, lastName} = req.user;
    const user = await this.userModel.findOne({ email });
    let newUser;
    if (!user) {
      console.log('not found');
      newUser = await this.userModel.create(req.user);
    }

    const tokens = await this.getTokens({
      id: user?._id || newUser.id,
      email: email,
      firstName,
      lastName
    });
    if (!tokens) {
      throw new ForbiddenException('Could not signing');
    }
    res.cookie('refreshtoken', tokens.refreshToken, 
        {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 // 7 days
        })
    const url = `${process.env.CLIENT_URL}/success`;

    return res.send({ message: 'Logged in successfully' });
    // return res.redirect(url);
  }

  async refreshUserTokens(_refreshToken: RefreshToken,res: Response) {
    const {rt} = _refreshToken
    const data = this.jwtService.verify(rt, {
      secret: process.env.REFRESH_TOKEN_SECRET
    });
    if (!data) throw new ForbiddenException('Access Denied');
    const user = await this.userModel.findById(data.id);
    if (!user)
      throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens({
      id: user.id || user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
    user.id=user._id;
    // await this.userModel.findByIdAndUpdate(user.id, { refreshToken: tokens.refreshToken });
    // return tokens;
    res.cookie('refreshtoken', tokens.refreshToken, 
        {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 // 7 days
        })
    return { user, ...tokens }
  }

  async getTokens(jwtPayload: JwtPayload): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: '7d',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: '7d',
      }),
    ]);

    return {
      accessToken: at,
      refreshToken: rt,
    };
  }
}
