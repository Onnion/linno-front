import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SaleService extends CrudServices {
  protected entity = 'invoice';


  constructor(public http: HttpClient) {
    super();
  }


  public invoiceCreate(data: any): Observable<any> {
    return this.http.post(`v1/${this.entity}/create`, data);
  }


  public getPaymentMethods(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/payment-methods`);
  }


  public getInvoiceDetail(option: any): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/${this.entity}/detail?invoice_id=${option.id}`);
  }

}
