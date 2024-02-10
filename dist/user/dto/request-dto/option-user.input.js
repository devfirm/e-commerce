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
exports.UserListOption = void 0;
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../../../common/enums");
let UserSortParameter = class UserSortParameter {
};
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "userType", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "createAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.SortOrder, { nullable: true }),
    __metadata("design:type", Number)
], UserSortParameter.prototype, "updatedAt", void 0);
UserSortParameter = __decorate([
    (0, graphql_1.InputType)()
], UserSortParameter);
let UserFilterParam = class UserFilterParam {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "phoneNo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UserFilterParam.prototype, "userStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "occupation", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], UserFilterParam.prototype, "yearsOfExperience", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "specialization", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "userType", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserFilterParam.prototype, "createAt", void 0);
UserFilterParam = __decorate([
    (0, graphql_1.InputType)()
], UserFilterParam);
let UserListOption = class UserListOption {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserListOption.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], UserListOption.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserSortParameter, { nullable: true }),
    __metadata("design:type", UserSortParameter)
], UserListOption.prototype, "sort", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserFilterParam, { nullable: true }),
    __metadata("design:type", UserFilterParam)
], UserListOption.prototype, "filter", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.LogicalOperator, { nullable: true }),
    __metadata("design:type", String)
], UserListOption.prototype, "filterOperator", void 0);
UserListOption = __decorate([
    (0, graphql_1.InputType)()
], UserListOption);
exports.UserListOption = UserListOption;
//# sourceMappingURL=option-user.input.js.map