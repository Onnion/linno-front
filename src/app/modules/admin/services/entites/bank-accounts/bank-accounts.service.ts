import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BankAccountsService extends CrudServices {
  protected entity = 'bank-account';

  constructor(public http: HttpClient) {
    super();
  }


  public getBanks() {
    return this.http.get(`${environment.AUTH_URL}/api/bank`);
  }

}
