import { Injectable } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class QuoteService {

    constructor(private store: StoreService) { }

    public create(): Observable<any> {
        const created_at = moment();
        const quotations = this.store.cart.map(quote => ({ ...quote, status: 'Ativa', created_at: created_at.format('YYYY-MM-DD HH:mm:ss'), expire_in: created_at.add(15, 'minutes').format('YYYY-MM-DD HH:mm:ss') }));
        this.store.orders = quotations;

        return new Observable((observer) => {
            for (let quotation of quotations) {

            }
        });

    }
}
