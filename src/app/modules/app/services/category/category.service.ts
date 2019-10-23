import { Injectable } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CategoryService {

  constructor(private store: StoreService, private http: HttpClient) { }

  public get(): void {
    this.http.get(`${environment.AUTH_URL}/api/product-categories`).subscribe(
      (categories_data: any) => {
        const categories = categories_data.data;
        this.store.categories = categories
      }
    );
  }
}
