"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODESMETHODS247 = exports.USERMETHODS247 = void 0;
var GENERALMETHODS;
(function (GENERALMETHODS) {
    GENERALMETHODS["CREATE"] = "create";
    GENERALMETHODS["FIND_BY_ID"] = "find-by-id";
    GENERALMETHODS["FIND_ALL"] = "find-all";
    GENERALMETHODS["FIND_ALL_PAGED"] = "find-all-paged";
    GENERALMETHODS["UPDATE"] = "update";
    GENERALMETHODS["REMOVE"] = "remove";
    GENERALMETHODS["EXISTS"] = "exists";
})(GENERALMETHODS || (GENERALMETHODS = {}));
var USERMETHODS;
(function (USERMETHODS) {
    USERMETHODS["FIND_BY_CELL_PHONE"] = "find-by-celphone";
})(USERMETHODS || (USERMETHODS = {}));
var CODESMETHODS;
(function (CODESMETHODS) {
    CODESMETHODS["VALIDATE"] = "validate";
})(CODESMETHODS || (CODESMETHODS = {}));
exports.USERMETHODS247 = {
    ...GENERALMETHODS,
    ...USERMETHODS
};
exports.CODESMETHODS247 = {
    ...GENERALMETHODS,
    ...USERMETHODS,
    ...CODESMETHODS
};
//# sourceMappingURL=enpoint-names.enum.js.map