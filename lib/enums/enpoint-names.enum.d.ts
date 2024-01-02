declare enum EnumGeneralMethods {
    CREATE = "create",
    FIND_BY_ID = "find-by-id",
    FIND_ALL = "find-all",
    UPDATE = "update",
    REMOVE = "remove",
    EXISTS = "exists"
}
declare enum EnumUserMethods {
    FIND_BY_CELL_PHONE = "find-by-celphone"
}
declare enum EnumUserCodesMethods {
    VALIDATE = "validate"
}
export declare const UserMethodsVPE: {
    FIND_BY_CELL_PHONE: EnumUserMethods.FIND_BY_CELL_PHONE;
    CREATE: EnumGeneralMethods.CREATE;
    FIND_BY_ID: EnumGeneralMethods.FIND_BY_ID;
    FIND_ALL: EnumGeneralMethods.FIND_ALL;
    UPDATE: EnumGeneralMethods.UPDATE;
    REMOVE: EnumGeneralMethods.REMOVE;
    EXISTS: EnumGeneralMethods.EXISTS;
};
export declare const UserCodesMethodsVPE: {
    VALIDATE: EnumUserCodesMethods.VALIDATE;
    FIND_BY_CELL_PHONE: EnumUserMethods.FIND_BY_CELL_PHONE;
    CREATE: EnumGeneralMethods.CREATE;
    FIND_BY_ID: EnumGeneralMethods.FIND_BY_ID;
    FIND_ALL: EnumGeneralMethods.FIND_ALL;
    UPDATE: EnumGeneralMethods.UPDATE;
    REMOVE: EnumGeneralMethods.REMOVE;
    EXISTS: EnumGeneralMethods.EXISTS;
};
export declare const NotificationMethodsVPE: {
    CREATE: EnumGeneralMethods.CREATE;
    FIND_BY_ID: EnumGeneralMethods.FIND_BY_ID;
    FIND_ALL: EnumGeneralMethods.FIND_ALL;
    UPDATE: EnumGeneralMethods.UPDATE;
    REMOVE: EnumGeneralMethods.REMOVE;
    EXISTS: EnumGeneralMethods.EXISTS;
};
export declare const MessageMethodsVPE: {
    CREATE: EnumGeneralMethods.CREATE;
    FIND_BY_ID: EnumGeneralMethods.FIND_BY_ID;
    FIND_ALL: EnumGeneralMethods.FIND_ALL;
    UPDATE: EnumGeneralMethods.UPDATE;
    REMOVE: EnumGeneralMethods.REMOVE;
    EXISTS: EnumGeneralMethods.EXISTS;
};
export declare const EmailMethodsVPE: {
    CREATE: EnumGeneralMethods.CREATE;
    FIND_BY_ID: EnumGeneralMethods.FIND_BY_ID;
    FIND_ALL: EnumGeneralMethods.FIND_ALL;
    UPDATE: EnumGeneralMethods.UPDATE;
    REMOVE: EnumGeneralMethods.REMOVE;
    EXISTS: EnumGeneralMethods.EXISTS;
};
export {};
