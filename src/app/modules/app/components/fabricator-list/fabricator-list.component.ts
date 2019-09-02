import { Component, OnInit } from '@angular/core';
import { Fabricator } from '../../models/fabricator.model';
import { StoreService } from '../../store/store.service';
import { Store } from '../../models/store.model';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fabricator-list',
  templateUrl: './fabricator-list.component.html',
  styleUrls: ['./fabricator-list.component.scss']
})
export class FabricatorListComponent implements OnInit {
  private selectedFabricators: Fabricator[] = [];
  public fabricators: Fabricator[];
  public loading = true;
  public shouldEnableQuote = false;
  public selectedAll = false;
  public checked = false;

  constructor(private store: StoreService, private router: Router) { }

  private handleFabricators(store: Store): void {
    if (store && store.fabricators.length > 0) {
      this.fabricators = store.fabricators;
      this.loading = false;
    }
  }

  private subscribeStore(): void {
    this.store._store.subscribe((store) => {
      this.handleFabricators(store);
    });
  }

  public toggleAll(): void {
    this.selectedAll = this.selectedAll && !this.checked ? true : !this.selectedAll;
    this.selectedFabricators = this.selectedAll ? this.store.fabricators : [];
    this.shouldEnableQuote = this.selectedFabricators.length > 0;
    this.checked = this.selectedAll;
  }

  public createQuote(): void {
    this.store.toggleInCart(this.selectedFabricators);
    this.router.navigate(['/app']);
  }

  public selectFabricator($event: Fabricator) {
    this.selectedFabricators = _.xorBy(this.selectedFabricators, [$event], 'id');
    this.shouldEnableQuote = this.selectedFabricators.length > 0;
    this.checked = false;
    console.log(this.selectedFabricators);
  }

  ngOnInit() {
    this.subscribeStore();
  }

}
