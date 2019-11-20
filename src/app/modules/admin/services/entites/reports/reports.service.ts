import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportsService extends CrudServices {
  protected entity = 'report';


  constructor(public http: HttpClient) {
    super();
  }


  public getReportList(options: any): Observable<any> {
    const optionsUrl = this.createOptionsUrl(options);
    return this.http.get(`${environment.AUTH_URL}/api/${this.entity}/${options.type}${optionsUrl}`);
  }


}
