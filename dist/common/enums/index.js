"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicalOperator = exports.SortOrder = exports.VerificationStatusEnum = exports.GenderEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["MALE"] = "male";
    GenderEnum["FEMALE"] = "female";
    GenderEnum["OTHERS"] = "others";
})(GenderEnum = exports.GenderEnum || (exports.GenderEnum = {}));
var VerificationStatusEnum;
(function (VerificationStatusEnum) {
    VerificationStatusEnum["VERIFIED"] = "verified";
    VerificationStatusEnum["UNVERIFIED"] = "unverified";
})(VerificationStatusEnum = exports.VerificationStatusEnum || (exports.VerificationStatusEnum = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["ASC"] = 1] = "ASC";
    SortOrder[SortOrder["DESC"] = -1] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
(0, graphql_1.registerEnumType)(SortOrder, {
    name: 'SortOrder',
});
var LogicalOperator;
(function (LogicalOperator) {
    LogicalOperator["AND"] = "AND";
    LogicalOperator["OR"] = "OR";
    LogicalOperator["NOT"] = "NOT";
})(LogicalOperator = exports.LogicalOperator || (exports.LogicalOperator = {}));
(0, graphql_1.registerEnumType)(LogicalOperator, {
    name: 'LogicalOperator',
});
//# sourceMappingURL=index.js.map