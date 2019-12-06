import { Injectable } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

@Injectable()
export class FabricatorService {
  constructor(private store: StoreService, private http: HttpClient) { }

  public get(product: Product): void {
    this.http.get(`${environment.AUTH_URL}/v1/companies/${product.id}`).subscribe(
      (companies_data: any) => {
        const companies = companies_data.data;
        this.store.fabricators = companies;
      },
      () => this.store.fabricators = []
    );
  }
}
