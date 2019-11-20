import { BaseRequestData } from './base-request-data.model';

export interface Category extends BaseRequestData {
    readonly name: string;
    readonly icon?: string;
}