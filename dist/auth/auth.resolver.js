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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
const create_auth_input_1 = require("./dto/create-auth.input");
const login_auth_input_1 = require("./dto/login-auth.input");
const auth_entity_1 = require("./entities/auth.entity");
const auth_refreshToken_input_1 = require("./dto/auth-refreshToken.input");
const decorators_1 = require("../common/decorators");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    signUpUser(singUpInput) {
        return this.authService.singUp(singUpInput);
    }
    login(loginInput, res) {
        return this.authService.login(loginInput, res);
    }
    refreshUserTokens(refreshToken, res) {
        return this.authService.refreshUserTokens(refreshToken, res);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, decorators_1.Public)(),
    __param(0, (0, graphql_1.Args)('singUpInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_input_1.CreateAuthInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "signUpUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_entity_1.LoginResponse),
    (0, decorators_1.Public)(),
    __param(0, (0, graphql_1.Args)('loginInput')),
    __param(1, (0, graphql_1.Context)('res')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_auth_input_1.LoginInput, Object]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, graphql_1.Mutation)(() => auth_entity_1.LoginResponse),
    __param(0, (0, graphql_1.Args)('refreshToken')),
    __param(1, (0, graphql_1.Context)('res')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_refreshToken_input_1.RefreshToken, Object]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "refreshUserTokens", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map