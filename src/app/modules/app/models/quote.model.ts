import { Product } from './product.model';
import { Factory } from './factory.model';

export interface Quotation {
    readonly product_category?: Product;
    readonly factories?: Factory[];
    readonly factory?: Factory;
    readonly amount?: number;
    readonly status?: string;
    readonly created_at?: string;
    readonly expire_in?: string;
    readonly updated_at?: string;
    readonly id?: number;
    readonly amount_suggested?: number;
    readonly author_id?: number;
    readonly code?: string;
    readonly distributor_id?: number;
    readonly quotation_group_id?: number;
    readonly quotation_status_id?: number;
}