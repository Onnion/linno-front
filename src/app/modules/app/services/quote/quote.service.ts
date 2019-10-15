import { Injectable } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Observable } from 'rxjs';

@Injectable()
export class QuoteService {

    constructor(private store: StoreService) { }

    public create(): Observable<any> {
        const quotations = this.store.cart;

        return new Observable((observer) => {
            for (let quotation of quotations) {

            }
        });

    }
}