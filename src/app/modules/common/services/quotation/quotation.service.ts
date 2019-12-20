import { Injectable } from '@angular/core';
import { StoreService } from '../../../app/store/store.service';
import { Observable, forkJoin, interval, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from '../../interfaces/crud/crud-services.helpers';
import { Quotation } from '../../../app/models/quote.model';
import { environment } from 'src/environments/environment';
import { Response } from '../../interfaces/response/response';
import * as _ from 'lodash';

@Injectable()
export class QuotationService extends CrudServices<any> {
    private timer: Subscription;

    constructor(private store: StoreService, private httpClient: HttpClient) {
        super();
        this.http = this.httpClient
        this.entity = 'quotations';
    }

    private createQuotationData(quotation: Quotation): object {
        return {
            product_category_id: quotation.product_category.id,
            amount: quotation.amount,
            factories_id: quotation.factories.map(factory => factory.id)
        }
    }

    private createQuotationRequests(cart: Quotation[]): Observable<any>[] {
        return cart.map(quotation => {
            return this.http.post(`${environment.AUTH_URL}/v1/${this.entity}`, this.createQuotationData(quotation))
        });
    }

    public listenner(): void {
        const timer = interval(10000);
        this.timer = timer.subscribe(() => this.getGroups());
    }

    public cleanListenner(): void {
        this.timer.unsubscribe();
    }

    public getGroups(): void {
        this.http.get(`${environment.AUTH_URL}/v1/quotation-groups`).subscribe(
            (quotation_goups: Response<any>) => {
                this.store.orders = quotation_goups.data as any[];
            },
            error => console.log(error)
        );
    }

    public getQuotations(id: string | number): Observable<Quotation[]> {
        return new Observable(observer => {
            this.http.get(`${environment.AUTH_URL}/v1/quotation-groups/quotations/${id}`).subscribe(
                (quotation_goups: Response<Quotation>) => {
                    observer.next(quotation_goups.data as Quotation[]);
                },
                error => observer.error(error)
            );
        });

    }

    public create(): Observable<Quotation[]> {
        return new Observable((observer) => {
            const quotations = this.store.cart;
            const requests = this.createQuotationRequests(quotations);
            forkJoin(requests).subscribe((res: Response<Quotation>[]) => {
                const quotation_goups = res.map(quotation => quotation.data as Quotation);
                this.store.cleanCart();
                observer.next(quotation_goups);
            });
        });
    }
}
