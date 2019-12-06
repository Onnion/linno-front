import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends CrudServices {
  protected entity = 'brand';

  constructor(public http: HttpClient) {
    super();
  }

  getFranchises(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/franchise`);
  }

}
