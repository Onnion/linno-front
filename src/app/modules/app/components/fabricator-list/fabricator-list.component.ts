import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Fabricator } from '../../models/fabricator.model';
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

  private storeSub: Subscription;
  private selectedFabricators: Fabricator[] = [];
  public fabricators: Fabricator[];
  public loading = true;
  public shouldEnableQuote = false;
  public selectedAll = false;
  public checked = false;
  public reselect: boolean;

  constructor(private store: StoreService, private router: Router) { }

  private handleFabricators(store: Store): void {
    if (store && store.fabricators.length > 0) {
      this.fabricators = store.fabricators;
      this.loading = false;
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
    this.selectedFabricators = this.selectedAll ? this.store.fabricators : [];
    this.shouldEnableQuote = this.selectedFabricators.length > 0;
    this.checked = this.selectedAll;
  }

  public createQuote(): void {
    this.store.toggleInCart(this.selectedFabricators, this.amount);
    this.router.navigate(['/app/app']);
  }

  public selectFabricator($event: Fabricator) {
    this.selectedFabricators = _.xorBy(this.selectedFabricators, [$event], 'id');
    this.shouldEnableQuote = this.selectedFabricators.length > 0;
    this.checked = false;
  }

  ngOnInit() {
    this.subscribeStore();
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

}
