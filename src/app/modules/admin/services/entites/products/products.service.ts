import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends CrudServices {
  protected entity = 'product';


  constructor(public http: HttpClient) {
    super();
  }


  public getBrandProducts(brandId: number): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}?brand=${brandId}`);
  }


  public return(data: any): Observable<any> {
    return this.http.post(`${environment.AUTH_URL}/v1/product-return`, data);
  }


  public suply(data: any): Observable<any> {
    return this.http.post(`${environment.AUTH_URL}/v1/product-supply`, data);
  }


  public getFilter(filter: any): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/${this.entity}/in-stock?code=${filter}`);
  }

}
