import { LANGUAGE, ROLETYPE } from "../../enums";
import { UserProfileModel } from "./user-profile.model";
export type UserModel = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    phone: string;
    password: string;
    photo?: string;
    isActive: boolean;
    role: ROLETYPE;
    language?: LANGUAGE;
    userProfile: UserProfileModel;
    createdAt?: Date;
    updatedAt?: Date;
};
