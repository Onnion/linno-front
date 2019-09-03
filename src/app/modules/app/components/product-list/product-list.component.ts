import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../store/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public loading = true;

  constructor(private store: StoreService) { }

  private subscribeStore(): void {
    this.store._store.subscribe((store) => {
      if (store && store.products && store.products.length > 0) {
        this.products = store.products;
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    this.subscribeStore();
  }

}
