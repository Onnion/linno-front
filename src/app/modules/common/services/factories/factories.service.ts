import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from '../../interfaces/crud/crud-services.helpers';

@Injectable()
export class FactoriesrService extends CrudServices<any> {

  constructor(private httpClient: HttpClient) {
    super();
    this.http = this.httpClient;
    this.entity = 'factories';
  }
}
