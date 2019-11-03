import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';


@Injectable({
  providedIn: 'root'
})
export class NichesService extends CrudServices {
  protected entity = 'niche';

  constructor(public http: HttpClient) {
    super();
  }


}
