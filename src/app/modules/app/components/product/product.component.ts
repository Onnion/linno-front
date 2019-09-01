import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() pure: boolean = false;
  @Input() index: number;

  constructor(private store: StoreService, private router: Router) { }

  public selectProduct(): void {
    this.store.product = this.product;
    this.router.navigate([`/app/producer/`]);
  }

  ngOnInit() { }

}
