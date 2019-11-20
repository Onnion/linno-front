import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../store/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private storeSub: Subscription;
  public products: Product[];
  public loading = true;

  constructor(private store: StoreService) { }

  private subscribeStore(): void {
    this.storeSub = this.store._store.subscribe((store) => {
      if (store && store.products && store.products.length > 0) {
        this.products = store.products;
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    this.subscribeStore();
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

}
