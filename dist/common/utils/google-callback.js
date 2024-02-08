"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GOOGLE_CALLBACK_URL = void 0;
const config = {
    development: 'http://localhost:3000/oauth2/redirect/google',
    staging: 'http://localhost:3000/oauth2/redirect/google',
    production: 'http://localhost:3000/oauth2/redirect/google',
};
exports.GOOGLE_CALLBACK_URL = config[process.env.NODE_ENV];
//# sourceMappingURL=google-callback.js.map