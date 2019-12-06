import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../store/store.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private store: StoreService, private http: HttpClient) { }

  public get(): void {
    this.http.get(`${environment.AUTH_URL}/v1/product-categories?limit=99999`).subscribe(
      (products_data: any) => {
        const products = products_data.data;
        this.store.products = products
      }
    );
  }
}
