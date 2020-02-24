import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { Quotation } from '../../models/quote.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public quotations: Quotation[];

  constructor(private store: StoreService, private router: Router) { }

  ngOnInit() {
    this.quotations = this.store.cart;
    if (!(this.quotations.length > 0)) {
      this.router.navigate(['/app/app']);
    }
  }

}
