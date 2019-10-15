import { Product } from './product.model';
import { Fabricator } from './fabricator.model';

export interface Quotation {
    readonly product: Product;
    readonly fabricators: Fabricator[];
    readonly amount?: number;
}