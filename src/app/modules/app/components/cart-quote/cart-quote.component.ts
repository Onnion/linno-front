import { Component, OnInit, Input } from '@angular/core';
import { Quotation } from '../../models/quote.model';
import { StoreService } from '../../store/store.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fabricator } from '../../models/fabricator.model';

@Component({
  selector: 'app-cart-quote',
  templateUrl: './cart-quote.component.html',
  styleUrls: ['./cart-quote.component.scss']
})
export class CartQuoteComponent implements OnInit {

  @Input() quotation: Quotation;
  @Input() cart: boolean;

  constructor(private storeService: StoreService, private _snackBar: MatSnackBar) { }

  public remove(): void {
    this.storeService.removeFromCart(this.quotation);
  }

  public showFabricator(fabricator: Fabricator): void {
    this._snackBar.open(fabricator.name, '', {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}
