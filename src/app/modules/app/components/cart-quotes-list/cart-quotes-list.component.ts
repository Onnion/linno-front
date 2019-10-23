import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Quotation } from '../../models/quote.model';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { Store } from '../../models/store.model';
import { QuoteService } from '../../services/quote/quote.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-quotes-list',
  templateUrl: './cart-quotes-list.component.html',
  styleUrls: ['./cart-quotes-list.component.scss']
})
export class CartQuotesListComponent implements OnInit, OnDestroy {

  @Input() cart: boolean = true;

  private storeSub: Subscription;
  public quotations: Quotation[];
  public loading = true;
  public showBtn = false;

  constructor(private store: StoreService, private router: Router, private quotationService: QuoteService) { }

  private handleQuotes(store: Store): void {
    if (store && store[this.cart ? 'cart' : 'orders'].length > 0) {
      this.quotations = store[this.cart ? 'cart' : 'orders'];
      this.loading = false;
    } else {
      this.router.navigate(['/app/app']);
    }
  }

  private subscribeStore(): void {
    this.storeSub = this.store._store.subscribe((store) => {
      this.handleQuotes(store);
    });
  }

  private activeButton(): void {
    setTimeout(() => this.showBtn = true, 1000);
  }

  public submitQuotes(): void {
    this.quotationService.create().subscribe();
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
