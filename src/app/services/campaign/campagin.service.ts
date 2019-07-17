import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterService } from '../filter/filter.service';

@Injectable({
    providedIn: 'root'
})
export class CampaignService extends CrudServices {

    constructor(private httpService: HttpClient, private filterService: FilterService) {
        super();

        this.http = this.httpService;
        this.entity = 'accounts';
    }

    public getByIdAccount(): Observable<any> {
        const account = this.filterService.getAccount();
        return new Observable((observer) => {
            this.httpService.get(`${environment.AUTH_URL}/api/moura/authenticated/campaign/${account.id}`).subscribe(
                ($data: any) => observer.next($data.data[0]),
                (error: any) => observer.error(error)
            );
        });
    }
}
