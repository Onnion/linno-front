import { Component, OnInit, OnDestroy } from '@angular/core';
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
  private storeSub: Subscription;
  public quotations: Quotation[];
  public loading = true;

  constructor(private store: StoreService, private router: Router, private quotationService: QuoteService) { }

  private handleQuotes(store: Store): void {
    if (store && store.cart.length > 0) {
      this.quotations = store.cart;
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

  public submitQuotes(): void {
    this.quotationService.create().subscribe(
      () => { },
      () => { }
    );
  }

  ngOnInit() {
    this.subscribeStore();
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

}
