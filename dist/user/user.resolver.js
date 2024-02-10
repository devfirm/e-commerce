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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./entities/user.entity");
const all_user_response_1 = require("./dto/response-dto/all-user-response");
const option_user_input_1 = require("./dto/request-dto/option-user.input");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    allUser(option, id) {
        return this.userService.getUsers(option);
    }
    findOneUser(id) {
        return this.userService.findOneUser(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => all_user_response_1.AllUserResponse, { name: 'allUser' }),
    __param(0, (0, graphql_1.Args)('option')),
    __param(1, (0, graphql_1.Context)('UserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [option_user_input_1.UserListOption, Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "allUser", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, { name: 'userDetails' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "findOneUser", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map