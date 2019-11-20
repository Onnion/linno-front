import { Component, OnInit, Input } from '@angular/core';
import { Quotation } from '../../models/quote.model';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {
  @Input() order: Quotation;

  public quotations: any[];

  constructor() { }

  ngOnInit() {
    this.quotations = this.order.fabricators.map((fabricator) => {
      return { product: this.order.product, fabricator, amount: this.order.amount, created_at: this.order.created_at, expire_in: this.order.expire_in };
    });
  }

}
