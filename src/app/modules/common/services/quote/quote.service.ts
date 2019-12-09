import { Injectable } from '@angular/core';
import { StoreService } from '../../../app/store/store.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuoteService {
    private entity = 'quotations';

    constructor(private store: StoreService,  private http: HttpClient) { }

    public create(): Observable<any> {
        return new Observable((observer) => {
            this.http.post
            const quotations = this.store.orders;
            console.log(quotations);

        });

    }
}
