"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandom = void 0;
function generateRandom() {
    return Math.floor(Math.random() * (9999)).toString().padStart(4, '0');
}
exports.generateRandom = generateRandom;
//# sourceMappingURL=generate-random.js.map