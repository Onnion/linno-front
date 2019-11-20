import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends CrudServices {
  protected entity = 'address';

  constructor(public http: HttpClient) {
    super();
  }
}
