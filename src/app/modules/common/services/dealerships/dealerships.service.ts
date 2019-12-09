import { Injectable } from "@angular/core";
import { CrudServices } from '../../interfaces/crud/crud-services.helpers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dealership } from '../../models/dealerships/dealerships.model';

@Injectable()
export class DealershipService extends CrudServices<Dealership> {

    constructor(private httpClient: HttpClient) {
        super();
        this.http = this.httpClient;
        this.entity = 'dealerships';
    }
}
