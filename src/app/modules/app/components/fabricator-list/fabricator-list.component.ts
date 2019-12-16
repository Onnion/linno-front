import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Factory } from '../../models/factory.model';
import { StoreService } from '../../store/store.service';
import { Store } from '../../models/store.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-fabricator-list',
  templateUrl: './fabricator-list.component.html',
  styleUrls: ['./fabricator-list.component.scss']
})
export class FabricatorListComponent implements OnInit, OnDestroy {

  @Input() amount: number = 1;
  @Input() price: number = 0;

  private storeSub: Subscription;
  private selectedFactories: Factory[] = [];
  public factories: Factory[];
  public loading = true;
  public shouldEnableQuote = false;
  public selectedAll = false;
  public checked = false;
  public reselect: boolean;

  constructor(private store: StoreService, private router: Router) { }

  private handleFabricators(store: Store): void {
    if (store && store.factories) {
      this.factories = store.factories;
      setTimeout(() => this.loading = false, 1000);
    }
  }

  private subscribeStore(): void {
    this.storeSub = this.store._store.subscribe((store) => {
      this.handleFabricators(store);
    });
  }

  public toggleAll(): void {
    this.reselect = this.selectedAll && !this.checked;
    this.selectedAll = this.selectedAll && !this.checked ? true : !this.selectedAll;
    this.selectedFactories = this.selectedAll ? this.store.factories : [];
    this.shouldEnableQuote = this.selectedFactories.length > 0;
    this.checked = this.selectedAll;
  }

  public createQuote(): void {
    window.navigator.vibrate(200);
    this.store.toggleInCart(this.selectedFactories, this.amount);
    this.router.navigate(['/app/app']);
  }

  public selectFabricator($event: Factory) {
    this.selectedFactories = _.xorBy(this.selectedFactories, [$event], 'id');
    this.shouldEnableQuote = this.selectedFactories.length > 0;
    this.checked = false;
  }

  ngOnInit() {
    this.subscribeStore();
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

}
