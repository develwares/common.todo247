import { LANGUAGE, PROFILE, ROLETYPE, VEHICLETYPE } from "./";
export declare class VehicleModel {
    id?: string;
    userProfile?: UserProfileModel;
    color?: string;
    plate?: string;
    model?: string;
    brand?: string;
    type?: VEHICLETYPE;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class UserProfileModel {
    id?: string;
    profile?: PROFILE;
    user?: UserModel;
    isActive?: boolean;
    vehicles?: VehicleModel[];
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class UserModel {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    countryCode?: string;
    cellPhone?: string;
    photo?: string;
    isActive?: boolean;
    role?: ROLETYPE;
    language?: LANGUAGE;
    userProfiles?: UserProfileModel[];
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CodeModel {
    id?: string;
    cellPhone?: string;
    code?: string;
    isActive?: boolean;
    expiresIn?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export {};
