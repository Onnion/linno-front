import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Quotation } from '../../models/quote.model';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private storeSub: Subscription;
  public title = '';
  public cart: Quotation[] = [];

  constructor(private store: StoreService, private router: Router, private active: ActivatedRoute, private location: Location) { }

  private subscribeStore(): void {
    this.storeSub = this.store._store.subscribe((store) => {
      if (store && store.cart && store.cart.length > 0) {
        this.cart = store.cart;
      } else {
        this.cart = [];
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

  public backRoute(): void {
    this.location.back();
  }

  public inHome(): boolean {
    return this.router.url !== '/app/app';
  }

  ngOnInit() {
    this.setTitle();
    this.subscribeStore();
    this.routerSubscribe();
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
