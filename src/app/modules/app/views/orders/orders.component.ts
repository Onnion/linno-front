import { Component, OnInit } from '@angular/core';
import { Quotation } from '../../models/quote.model';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Quotation[];

  constructor(private store: StoreService, private router: Router) { }

  ngOnInit() {
    this.orders = this.store.orders;
    console.log(this.orders);

    if (this.orders.length <= 0) {
      this.router.navigate(['/app/app']);
    }
  }

}
