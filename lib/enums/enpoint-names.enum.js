"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMethodsVPE = exports.MessageMethodsVPE = exports.NotificationMethodsVPE = exports.UserCodesMethodsVPE = exports.UserMethodsVPE = void 0;
var EnumGeneralMethods;
(function (EnumGeneralMethods) {
    EnumGeneralMethods["CREATE"] = "create";
    EnumGeneralMethods["FIND_BY_ID"] = "find-by-id";
    EnumGeneralMethods["FIND_ALL"] = "find-all";
    EnumGeneralMethods["UPDATE"] = "update";
    EnumGeneralMethods["REMOVE"] = "remove";
    EnumGeneralMethods["EXISTS"] = "exists";
})(EnumGeneralMethods || (EnumGeneralMethods = {}));
var EnumUserMethods;
(function (EnumUserMethods) {
    EnumUserMethods["FIND_BY_CELL_PHONE"] = "find-by-celphone";
})(EnumUserMethods || (EnumUserMethods = {}));
var EnumUserCodesMethods;
(function (EnumUserCodesMethods) {
    EnumUserCodesMethods["VALIDATE"] = "validate";
})(EnumUserCodesMethods || (EnumUserCodesMethods = {}));
exports.UserMethodsVPE = {
    ...EnumGeneralMethods,
    ...EnumUserMethods
};
exports.UserCodesMethodsVPE = {
    ...EnumGeneralMethods,
    ...EnumUserMethods,
    ...EnumUserCodesMethods
};
exports.NotificationMethodsVPE = {
    ...EnumGeneralMethods
};
exports.MessageMethodsVPE = {
    ...EnumGeneralMethods
};
exports.EmailMethodsVPE = {
    ...EnumGeneralMethods
};
//# sourceMappingURL=enpoint-names.enum.js.map