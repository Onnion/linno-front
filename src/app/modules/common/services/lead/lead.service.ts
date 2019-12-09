import { Injectable } from '@angular/core';
import { CrudServices } from '../../interfaces/crud/crud-services.helpers';
import { Lead } from '../../models/lead/lead.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeadService extends CrudServices<Lead>{ 
  constructor(private httpClient: HttpClient) {
    super();
    this.http = this.httpClient;
    this.entity = 'lead';
  }
}
