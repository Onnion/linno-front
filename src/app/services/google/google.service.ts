import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  private entity = 'google-report';

  constructor(private http: HttpClient, private filterService: FilterService) {
  }

  private generateGoogleReportsObject(): object {
    return {
      "range": this.filterService.getTime().id,
      "account_id": this.filterService.getAccount().id
    }
  }

  public getReports(): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`${environment.AUTH_URL}/api/${this.entity}`, this.generateGoogleReportsObject()).subscribe(
        (data: any) => observer.next(data.data),
        (error: any) => observer.error(error)
      );
    });
  }
}
