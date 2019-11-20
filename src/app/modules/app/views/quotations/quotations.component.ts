import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { Quotation } from '../../models/quote.model';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {
  public orderSelected: Quotation;

  constructor(private store: StoreService, private router: Router) { }

  ngOnInit() {
    this.orderSelected = this.store.orderSelected;

    if (!this.orderSelected) {
      this.router.navigate(['/app/app']);
    }
  }
}
