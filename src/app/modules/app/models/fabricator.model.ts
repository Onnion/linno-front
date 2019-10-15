import { BaseRequestData } from './base-request-data.model';

export interface Fabricator extends BaseRequestData {
    readonly name: string;
    readonly picture?: string;
}