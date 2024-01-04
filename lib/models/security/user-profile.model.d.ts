import { PROFILE } from '../../enums';
import { UserModel } from './user.model';
export type UserProfileModel = {
    id: string;
    profile: PROFILE;
    users: UserModel[];
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};
