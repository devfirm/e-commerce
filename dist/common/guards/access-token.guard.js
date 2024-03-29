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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
const jwt = require("jsonwebtoken");
let AccessTokenGuard = class AccessTokenGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
        const isPublic = this.reflector.getAllAndOverride('isPublic', [
            context.getHandler(),
            context.getClass(),
        ]);
        const authenticationHeader = ctx.req.headers.Authorization || ctx.req.headers.authorization;
        if (authenticationHeader) {
            let req = ctx.req.body.query;
            let first = req.toString().split('{')[1].trim();
            console.log(first.split('(')[0]);
            try {
                const token = authenticationHeader.split(' ')[1];
                const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                ctx.user = user;
                ctx.UserId = user.id;
                return true;
            }
            catch (error) {
                throw new common_1.HttpException("Invalid token: " + error.message, common_1.HttpStatus.UNAUTHORIZED);
            }
        }
        if (isPublic)
            return true;
        else
            throw new common_1.HttpException("Unauthorized ", common_1.HttpStatus.UNAUTHORIZED);
    }
};
AccessTokenGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], AccessTokenGuard);
exports.AccessTokenGuard = AccessTokenGuard;
//# sourceMappingURL=access-token.guard.js.map