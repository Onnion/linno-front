import { Component, OnInit } from '@angular/core';
import { Quotation } from '../../models/quote.model';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { Store } from '../../models/store.model';
import { QuoteService } from '../../services/quote/quote.service';

@Component({
  selector: 'app-cart-quotes-list',
  templateUrl: './cart-quotes-list.component.html',
  styleUrls: ['./cart-quotes-list.component.scss']
})
export class CartQuotesListComponent implements OnInit {
  public quotations: Quotation[];
  public loading = true;

  constructor(private store: StoreService, private router: Router, private quotationService: QuoteService) { }

  private handleQuotes(store: Store): void {
    if (store && store.cart.length > 0) {
      this.quotations = store.cart;
      this.loading = false;
    }
  }

  private subscribeStore(): void {
    this.store._store.subscribe((store) => {
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

}
