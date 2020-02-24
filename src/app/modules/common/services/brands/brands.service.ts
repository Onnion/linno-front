import { Injectable } from "@angular/core";
import { CrudServices } from '../../interfaces/crud/crud-services.helpers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Brand } from '../../models/brands/brands.model';

@Injectable()
export class BrandService extends CrudServices<Brand> {

    constructor(private httpClient: HttpClient) {
        super();
        this.http = this.httpClient;
        this.entity = 'brands';
    }

}
