import { BaseRequestData } from './base-request-data.model';
import { User } from '../../common/models/user/user.model';

export interface Factory extends BaseRequestData {
    code: string,
    is_active: number,
    name: string,
    opening_date: string,
    phone_number: string,
    picture: string,
    registration_code: string,
    trade_name: string,
    user: User
}