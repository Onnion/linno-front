import { Injectable } from '@angular/core';
import { StoreService } from '../../../app/store/store.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from '../../interfaces/crud/crud-services.helpers';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService extends CrudServices<any> {

  constructor(private store: StoreService, private httpClient: HttpClient) {
    super();
    this.http = this.httpClient;
    this.entity = 'products';
  }

  public getProductCategories(): Observable<any> {
    return new Observable(observer => {
      this.http.get(`${environment.AUTH_URL}/v1/product-categories?limit=999999`).subscribe(
        (products_data: any) => {
          observer.next(products_data.data);
        },
        error => observer.error(error)
      );
    });
  }

  public setInStoreProductCategories(): void {
    this.getProductCategories().subscribe(
      (products_categories: any) => this.store.products = products_categories
    );
  }
}
