"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const nest_sendgrid_1 = require("@anchan828/nest-sendgrid");
const uid_1 = require("uid");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userModel, jwtService, sendGrid) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.sendGrid = sendGrid;
    }
    async singUp(createAuthInput) {
        const { email, password, firstName, lastName } = createAuthInput;
        const existingUser = await this.userModel.findOne({ email });
        if (existingUser) {
            throw new common_1.BadRequestException('Email already exists');
        }
        const pass = password || (0, uid_1.uid)();
        const hashPassword = await bcrypt.hash(pass, 11);
        createAuthInput.password = hashPassword;
        const user = await this.userModel.create(createAuthInput);
        await this.sendGrid.send({
            to: email,
            from: 'noreply@devfirmltd.com',
            subject: 'Welcome to Co-MS',
            text: `hello ${firstName} ${lastName}, 
             Welcome to Co-MS . 
             ${password ? `email: ${email}
                        password: ${pass}   ` : ""}`,
        });
        return 'User Created successfully on Co-MS';
    }
    async login(loginData, res) {
        const { email, password } = loginData;
        const user = await this.userModel.findOne({ email });
        console.log("🚀 ~ file: auth.service.ts:50 ~ AuthService ~ login ~ user:", user);
        if (!user) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.BadRequestException('Invalid credentials');
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
            throw new common_1.ForbiddenException('Could not sign in');
        }
        res.cookie('refreshtoken', tokens.refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return Object.assign({ user }, tokens);
    }
    async signToken(args) {
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
        const { email, firstName, lastName } = req.user;
        const user = await this.userModel.findOne({ email });
        let newUser;
        if (!user) {
            console.log('not found');
            newUser = await this.userModel.create(req.user);
        }
        const tokens = await this.getTokens({
            id: (user === null || user === void 0 ? void 0 : user._id) || newUser.id,
            email: email,
            firstName,
            lastName
        });
        if (!tokens) {
            throw new common_1.ForbiddenException('Could not signing');
        }
        res.cookie('refreshtoken', tokens.refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        const url = `${process.env.CLIENT_URL}/success`;
        return res.send({ message: 'Logged in successfully' });
    }
    async refreshUserTokens(_refreshToken, res) {
        const { rt } = _refreshToken;
        const data = this.jwtService.verify(rt, {
            secret: process.env.REFRESH_TOKEN_SECRET
        });
        if (!data)
            throw new common_1.ForbiddenException('Access Denied');
        const user = await this.userModel.findById(data.id);
        if (!user)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens({
            id: user.id || user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        });
        user.id = user._id;
        res.cookie('refreshtoken', tokens.refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return Object.assign({ user }, tokens);
    }
    async getTokens(jwtPayload) {
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        nest_sendgrid_1.SendGridService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map