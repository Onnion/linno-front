import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  protected entity = 'dashboard';

  constructor(public http: HttpClient) { }


  public getDashboardNiches(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/${this.entity}/niches`);
  }


  public getDashboardSales(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/${this.entity}/sale`);
  }


  public getExpireds(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/${this.entity}/contracts-expired`);
  }


  public getMonthRent(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/${this.entity}/month-rent`);
  }


  public getCashBalance(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/v1/${this.entity}/cash-balance`);
  }

}
