"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUserId = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentUserId = (0, common_1.createParamDecorator)((_, context) => {
    var _a;
    const request = (_a = context === null || context === void 0 ? void 0 : context.switchToHttp()) === null || _a === void 0 ? void 0 : _a.getRequest();
    const user = request === null || request === void 0 ? void 0 : request.user;
    return user === null || user === void 0 ? void 0 : user.id;
});
//# sourceMappingURL=get-current-user-id.decorator.js.map