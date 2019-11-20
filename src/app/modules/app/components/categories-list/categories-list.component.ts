import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Category } from '../../models/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  private storeSub: Subscription;
  public categories: Category[];
  public loading = true;

  constructor(private store: StoreService) { }

  private subscribeStore(): void {
    this.storeSub = this.store._store.subscribe((store) => {
      if (store && store.categories.length > 0) {
        this.categories = store.categories.slice(0, 4).concat({ id: 0, name: 'more', created_at: '', updated_at: '', icon: 'more_horiz' });
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
