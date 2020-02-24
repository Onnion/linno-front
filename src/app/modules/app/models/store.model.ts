import { Factory } from './factory.model';
import { Category } from './category.model';
import { Product } from './product.model';
import { Quotation } from './quote.model';

export interface Store {
  readonly categories: Category[];
  readonly products: Product[];
  readonly factories: Factory[];
  readonly cart: Quotation[];
  readonly quotationGroups: Quotation[];
}
