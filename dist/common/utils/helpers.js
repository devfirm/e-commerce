"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformObject = exports.generateOTP = void 0;
const generateOTP = () => {
    const minm = 100000;
    const maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
};
exports.generateOTP = generateOTP;
exports.TransformObject = {
    transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
    },
};
//# sourceMappingURL=helpers.js.map