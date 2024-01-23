import { LANGUAGE, PROFILE, ROLETYPE, VEHICLETYPE } from './';
export declare class CreateCodeModel {
    cellPhone: string;
}
export declare class UpdateCodeModel extends CreateCodeModel {
    id: string;
}
declare class BaseSearchModel {
    page?: number;
    perPage?: number;
    dato?: string;
}
export declare class SearchCodeModel extends BaseSearchModel {
    code?: string;
    cellPhone?: string;
}
export declare class CreateDocumentTypeModel {
    name: string;
    profile: PROFILE;
    required: boolean;
}
export declare class UpdateDocumentTypeModel extends CreateDocumentTypeModel {
    id: string;
}
export declare class SearchDocumentTypeModel extends BaseSearchModel {
}
export declare class CreateUserModel {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    cellPhone: string;
    photo?: string;
    isActive: boolean;
    role: ROLETYPE;
    language?: LANGUAGE;
}
export declare class UpdateUserModel extends CreateUserModel {
    id: string;
}
export declare class SearchUserModel extends BaseSearchModel {
    cellPhone?: string;
}
export declare class CreateUserProfileModel {
    profile: PROFILE;
    userId: string;
    isActive: boolean;
}
export declare class UpdateUserProfileModel extends CreateUserProfileModel {
    id: string;
}
export declare class SearchUserProfileModel extends BaseSearchModel {
    userId?: string;
}
export declare class CreateVehicleModel {
    userProfileId: string;
    color: string;
    plate: string;
    model: string;
    brand: string;
    type: VEHICLETYPE;
}
export declare class UpdateVehicleModel extends CreateVehicleModel {
    id: string;
}
export declare class SearchVehicleModel extends BaseSearchModel {
}
export declare class CreateProfileDocumentModel {
    userProfileId: string;
    ducumentTypeId: string;
    ducument: string;
}
export declare class UpdateProfileDocumentModel extends CreateProfileDocumentModel {
    id?: string;
}
export declare class SearchProfileDocumentModel extends BaseSearchModel {
}
export {};
