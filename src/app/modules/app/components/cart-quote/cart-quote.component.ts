import { Component, OnInit, Input } from '@angular/core';
import { Quotation } from '../../models/quote.model';

@Component({
  selector: 'app-cart-quote',
  templateUrl: './cart-quote.component.html',
  styleUrls: ['./cart-quote.component.scss']
})
export class CartQuoteComponent implements OnInit {

  @Input() quotation: Quotation;

  constructor() { }

  ngOnInit() {
  }

}
