import { PROFILE } from '../../enums';
import { UserModel } from './user.model';
export type UserProfileModel = {
    id?: string;
    profile?: PROFILE;
    user?: UserModel;
    userId?: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};
