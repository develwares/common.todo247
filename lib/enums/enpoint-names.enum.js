"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMethodsVPE = exports.MessageMethodsVPE = exports.NotificationMethodsVPE = exports.UserCodesMethodsVPE = exports.USERMETHODS247 = void 0;
var GENERALMETHODS;
(function (GENERALMETHODS) {
    GENERALMETHODS["CREATE"] = "create";
    GENERALMETHODS["FIND_BY_ID"] = "find-by-id";
    GENERALMETHODS["FIND_ALL"] = "find-all";
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
exports.UserCodesMethodsVPE = {
    ...GENERALMETHODS,
    ...USERMETHODS,
    ...CODESMETHODS
};
exports.NotificationMethodsVPE = {
    ...GENERALMETHODS
};
exports.MessageMethodsVPE = {
    ...GENERALMETHODS
};
exports.EmailMethodsVPE = {
    ...GENERALMETHODS
};
//# sourceMappingURL=enpoint-names.enum.js.map