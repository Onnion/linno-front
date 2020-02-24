import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Quotation } from '../../models/quote.model';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { Store } from '../../models/store.model';
import { QuotationService } from '../../../common/services/quotation/quotation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-order-list',
  templateUrl: './cart-order-list.component.html',
  styleUrls: ['./cart-order-list.component.scss']
})
export class CartOrderListComponent implements OnInit, OnDestroy {

  @Input() cart: boolean = true;

  private storeSub: Subscription;
  public quotations: Quotation[];
  public loading = true;
  public showBtn = false;

  constructor(private store: StoreService, private router: Router, private quotationService: QuotationService) { }

  private handleOrders(store: Store): void {
    if (store && store[this.cart ? 'cart' : 'quotationGroups'].length > 0) {
      this.quotations = store[this.cart ? 'cart' : 'quotationGroups'];
      this.loading = false;
    } else {
      this.router.navigate(['/app/app']);
    }
  }

  private subscribeStore(): void {
    this.storeSub = this.store._store.subscribe((store) => {
      this.handleOrders(store);
    });
  }

  private activeButton(): void {
    setTimeout(() => this.showBtn = true, 1000);
  }

  public submitQuotes(): void {
    this.loading = true;
    this.quotationService.create().subscribe(
      quotations => {
        this.loading = false;
        this.router.navigate(['/app/app']);
      },
      error => {
        this.loading = false
      });
  }

  public trackByHandle(index: number, item: Quotation): string | number {
    let handler = null;

    if (item) { handler = item.id; }

    return handler;
  }

  ngOnInit() {
    this.subscribeStore();
    this.activeButton();
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
    this.showBtn = false;
  }

}
