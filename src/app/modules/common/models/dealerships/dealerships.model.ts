import { Brand } from '../brands/brands.model';

export interface Dealership {
  readonly name: string;
  readonly id?: number;
  readonly phone: string;
  readonly email: string;
  readonly site: string;
  readonly brand_id?: string;
  readonly brand?: Brand;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}
