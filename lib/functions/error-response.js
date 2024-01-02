"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = void 0;
function errorResponse(message = '') {
    return { status: 'error', message, data: null };
}
exports.errorResponse = errorResponse;
//# sourceMappingURL=error-response.js.map