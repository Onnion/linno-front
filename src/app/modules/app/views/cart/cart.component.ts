import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { Quote } from '../../models/quote.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public quotes: Quote[];

  constructor(private store: StoreService, private router: Router) { }

  ngOnInit() {
    this.quotes = this.store.cart;
    if (!(this.quotes)) {
      this.router.navigate(['/']);
    }
  }

}
