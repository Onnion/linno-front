import { Fabricator } from './fabricator.model';
import { Category } from './category.model';
import { Product } from './product.model';
import { Quote } from './quote.model';

export interface Store {
    readonly categories: Category[];
    readonly products: Product[];
    readonly fabricators: Fabricator[];
    readonly cart: Quote[];
  }
  