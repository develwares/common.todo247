import { CarrierStatusEnum, PaymentMethodEnum } from './';
export declare class CreateTransportModel {
    userId: string;
    userFullName: string;
    status: CarrierStatusEnum;
    rate: number;
    paymentMethod: PaymentMethodEnum;
    lat?: number;
    lng?: number;
    shortAddress?: string;
    longAddress?: string;
    comments?: string;
}
export declare class UpdateTransportModel extends CreateTransportModel {
    id: string;
}
declare class BaseSearchModel {
    page?: number;
    perPage?: number;
    dato?: string;
}
export declare class SearchTransportModel extends BaseSearchModel {
}
export declare class CreateTransportLocationModel {
    trasnportId: string;
    shortAddress: string;
    longAddress: string;
    lat?: number;
    lng?: number;
}
export declare class UpdateTransportLocationModel extends CreateTransportLocationModel {
    id: string;
}
export declare class SearchTransporLocationModel extends BaseSearchModel {
}
export declare class CreateTransportQualificationModel {
    userId: string;
    userFullName: string;
    carrierId: string;
    carrierFullName: string;
    qualification: number;
    comment?: string;
}
export declare class UpdateTransportQualificationModel extends CreateTransportQualificationModel {
    id: string;
}
export declare class SearchTransportQualificationModel extends BaseSearchModel {
}
export {};
