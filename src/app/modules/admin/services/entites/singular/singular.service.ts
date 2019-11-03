import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';


@Injectable({
  providedIn: 'root'
})
export class SingularService extends CrudServices {
  protected entity = 'singular';


  constructor(public http: HttpClient) {
    super();
  }

  public updatePassword(password: string): Observable<any> {
    return this.http.post(`${environment.AUTH_URL}/api/${this.entity}/update`, { password });
  }

  public getContracts(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/api/${this.entity}/contracts`);
  }

  public getDashboardSales(brand_id: number): Observable<any> {
    return this.http.post(`${environment.AUTH_URL}/api/${this.entity}/dashboard/sale`, { brand_id });
  }

  public getDashboardRent(brand_id: number): Observable<any> {
    return this.http.post(`${environment.AUTH_URL}/api/${this.entity}/dashboard/rent`, { brand_id });
  }

  public getSales(options: any): Observable<any> {
    const optionsUrl = this.createOptionsUrl(options);
    return this.http.get(`${environment.AUTH_URL}/api/${this.entity}/sales${optionsUrl}`);
  }

  public getSalesBalance(brand_id: number): Observable<any> {
    return this.http.post(`${environment.AUTH_URL}/api/${this.entity}/dashboard/balance`, { brand_id });
  }

  public producDetail(produc_id: number): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`${environment.AUTH_URL}/api/${this.entity}/stock/product/${produc_id}`).subscribe(
        (res: any) => {
          observer.next(res.data);
        },
        (error) => { }
      );

    });
  }
}
