import { Component, OnInit } from '@angular/core';
import { Quotation } from '../../models/quote.model';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation-groups',
  templateUrl: './quotation-groups.component.html',
  styleUrls: ['./quotation-groups.component.css']
})
export class QuotationGroupsComponent implements OnInit {
  public orders: Quotation[];

  constructor(private store: StoreService, private router: Router) { }

  ngOnInit() {
    this.orders = this.store.orders;

    if (this.orders.length <= 0) {
      this.router.navigate(['/app/app']);
    }
  }

}
