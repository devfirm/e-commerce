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
exports.AccessPermissionGuard = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const User_1 = require("../../user/model/User");
let AccessPermissionGuard = class AccessPermissionGuard {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async canActivate(context) {
        var _a, _b;
        const request = context.switchToHttp().getRequest();
        const user = await this.userModel
            .findById(request.user.id)
            .populate('userRole');
        if ((user === null || user === void 0 ? void 0 : user.roleType) == 0) {
            return true;
        }
        else {
            if (!((_b = (_a = user === null || user === void 0 ? void 0 : user.userRole) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.includes(request.route.path.split('/')[2]))) {
                throw new common_1.HttpException('You do not have permission to access this resource', common_1.HttpStatus.FORBIDDEN);
            }
            return true;
        }
    }
};
AccessPermissionGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(User_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AccessPermissionGuard);
exports.AccessPermissionGuard = AccessPermissionGuard;
//# sourceMappingURL=accessPermission.guard.js.map