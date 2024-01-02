export interface IResponse<T> {
    status: 'success' | 'warning' | 'error';
    data: T;
    message: string;
}
