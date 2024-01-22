import { CarrierStatusEnum, PaymentMethodEnum } from './';
export declare class TransportLocationModel {
    id?: string;
    trasnport?: TransportModel;
    shortAddress?: string;
    longAddress?: string;
    lat?: number;
    lng?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class TransportModel {
    id?: string;
    userId?: string;
    userFullName?: string;
    status?: CarrierStatusEnum;
    initialRate?: number;
    rate?: number;
    carrierId?: string;
    carrierFullName?: string;
    paymentMethod?: PaymentMethodEnum;
    lat?: number;
    lng?: number;
    shortAddress?: string;
    longAddress?: string;
    comments?: string;
    trasnportLocations?: TransportLocationModel[];
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class TransportQualificationModel {
    id?: string;
    userId?: string;
    userFullName?: string;
    carrierId?: string;
    carrierFullName?: string;
    qualification?: number;
    comment?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export {};
