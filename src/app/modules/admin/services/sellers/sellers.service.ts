import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';

@Injectable()
export class SellersService extends CrudServices {
  protected entity = 'user/sellers';

  constructor(public http: HttpClient) {
    super();
  }
}
