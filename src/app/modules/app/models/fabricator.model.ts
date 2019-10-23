import { BaseRequestData } from './base-request-data.model';

export interface Fabricator extends BaseRequestData {
    readonly company_name: string;
    readonly picture?: string;
}