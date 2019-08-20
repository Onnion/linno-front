import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeadsFilterAccountType } from 'src/app/modules/common/models/leads-filter-account.model';
import { FilterService } from '../filter/filter.service';

@Injectable({
    providedIn: 'root'
})
export class AccountService extends CrudServices {

    constructor(private httpService: HttpClient, private filterService: FilterService) {
        super();

        this.http = this.httpService;
        this.entity = 'accounts';
    }

    private generateParams(status = ''): any {
        const range = this.filterService.getTime();
        let params: any = {
            range: range.id,
            account_id: this.filterService.getAccount().id
        };

        if (params.range === 'CUSTOM') {
            params = {
                ...params,
                start_date: range.start_date,
                end_date: range.end_date
            };
        }

        if (status) {
            params = {
                ...params,
                status
            };
        }
        return params;
    }

    private isAll(): boolean {
        return this.filterService.getAccount().id === 'all';
    }

    public getAccounts(): Observable<LeadsFilterAccountType[]> {
        return new Observable((observer) => {
            this.http.get(`${environment.AUTH_URL}/api/${this.entity}/authenticated`).subscribe(
                (data: any) => observer.next(data.data.accounts),
                (error: any) => observer.error(error)
            );
        });
    }

    public getCalls(options): Observable<any> {
        const optionsUrl = this.createOptionsUrl(options, this.isAll());

        return new Observable((observer) => {
            this.httpService.post(`${environment.AUTH_URL}/api/${this.entity}/calls${this.isAll() ? '/all' : ''}${optionsUrl}`,
                this.generateParams()).subscribe(
                    (data: any) => observer.next(data),
                    (error: any) => observer.error(error)
                );
        });
    }

    public getBudget(): Observable<any> {
        return new Observable((observer) => {
            this.httpService.post(`${environment.AUTH_URL}/api/${this.entity}/budget`,
                this.generateParams()).subscribe(
                    (data: any) => observer.next(data.data.attributes),
                    (error: any) => observer.error(error)
                );
        });
    }

    public getCallsMissed(): Observable<any> {
        return new Observable((observer) => {
            this.httpService.post(`${environment.AUTH_URL}/api/${this.entity}/calls${this.isAll() ? '/all' : ''}`,
                this.generateParams('NÃO ATENDIDA')).subscribe(
                    (data: any) => observer.next(data),
                    (error: any) => observer.error(error)
                );
        });
    }

    public getCallsAnswereds(): Observable<any> {
        return new Observable((observer) => {
            this.httpService.post(`${environment.AUTH_URL}/api/${this.entity}/calls${this.isAll() ? '/all' : ''}`,
                this.generateParams('ATENDIDA')).subscribe(
                    (data: any) => observer.next(data),
                    (error: any) => observer.error(error)
                );
        });
    }

    public setProblemAccountCalls(id: number, data): Observable<any> {
        return new Observable((observer) => {
            this.httpService.put(`${environment.AUTH_URL}/api/moura/change-status/${id}`, data).subscribe(
                ($data: any) => observer.next($data),
                (error: any) => observer.error(error)
            );
        });
    }
}
