import { Product } from './product.model';
import { Fabricator } from './fabricator.model';

export interface Quote {
    readonly product: Product;
    readonly fabricators: Fabricator[];
}