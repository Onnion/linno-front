import { Injectable } from '@angular/core';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResaleService extends CrudServices {

  constructor(private $http: HttpClient) {
    super();

    this.http = this.$http;
    this.entity = 'resale';
  }
}
