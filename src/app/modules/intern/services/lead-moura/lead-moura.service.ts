import { Injectable } from '@angular/core';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LeadMouraService extends CrudServices {

  constructor(public $http: HttpClient) {
    super();

    this.http = this.$http;
    this.entity = 'lead/revenda-moura/update';
  }

}