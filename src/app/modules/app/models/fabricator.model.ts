import { BaseRequestData } from './base-request-data.model';

export interface Fabricator extends BaseRequestData {
    code: string,
    is_active: number,
    name: string,
    opening_date: string,
    phone_number: string,
    picture: string,
    registration_code: string,
    trade_name: string,
    user: any
}