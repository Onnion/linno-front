import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Quotation } from '../../models/quote.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public title = '';
  public cart: Quotation[] = [];

  constructor(private store: StoreService, private router: Router, private active: ActivatedRoute) { }

  private subscribeStore(): void {
    this.store._store.subscribe((store) => {
      if (store && store.cart && store.cart.length > 0) {
        this.cart = store.cart;
      }
    });
  }

  private setTitle() {
    const snapShop = this.active.children[0].snapshot.data;

    if (snapShop.store) {
      const entity = this.store[snapShop.get];
      const titleSplited = entity[snapShop.key].split(' ');
      this.title = `${titleSplited[0]} ${titleSplited[1]}${titleSplited.length > 2 ? '...' : ''}`;
    }
  }

  private routerSubscribe(): void {
    this.router.events.subscribe(
      (res) => {
        this.setTitle();
      },
      (error) => { }
    );
  }

  public inCart(): string {
    return this.cart.reduce((prev, product) => prev + 1, 0).toString();
  }

  ngOnInit() {
    this.setTitle();
    this.subscribeStore();
    this.routerSubscribe();
  }
}
