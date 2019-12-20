import { Component, OnInit, Input } from '@angular/core';
import { Quotation } from '../../models/quote.model';
import { StoreService } from '../../store/store.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Factory } from '../../models/factory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.scss']
})
export class CartOrderComponent implements OnInit {

  @Input() quotation: Quotation;
  @Input() cart: boolean;

  constructor(private storeService: StoreService, private router: Router, private _snackBar: MatSnackBar) { }

  public remove(): void {
    this.storeService.removeFromCart(this.quotation);
  }

  public showFactor(factor: Factory): void {
    this._snackBar.open(factor.trade_name, '', {
      duration: 2000,
    });
  }

  public toQuotationList(quotation: Quotation): void {
    if (!this.cart) {
      this.storeService.orderSelected = this.quotation;
      this.router.navigate([`app/app/quotation-groups/quotations/${quotation.id}`]);
    }
  }

  ngOnInit() {
  }
}
