import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from '../../interfaces/crud/crud-services.helpers';
import { environment } from 'src/environments/environment';
import { Response } from '../../interfaces/response/response';
import { StoreService } from 'src/app/modules/app/store/store.service';
import { Factory } from 'src/app/modules/app/models/factory.model';

@Injectable()
export class FactoriesrService extends CrudServices<any> {

  constructor(private httpClient: HttpClient, private store: StoreService) {
    super();
    this.http = this.httpClient;
    this.entity = 'factories';
  }

  public getProductFactories(id: (string | number) = null): void {
    this.http.get(`${environment.AUTH_URL}/v1/product-categories/${this.entity}/${id}`).subscribe(
      (res: Response<Factory>) => {
        const factories = res.data as Factory[];
        this.store.factories = factories;
      },
      error => console.log(error)
    );
  }
}
