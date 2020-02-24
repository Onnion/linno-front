import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreService } from '../../store/store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  private storeSub: Subscription;
  public quotationGroups = [];

  constructor(private _snackBar: MatSnackBar, private store: StoreService, private router: Router) { }

  public showName(title: string): void {
    this._snackBar.open(title, '', {
      duration: 2000,
    });
  }

  private subscribeStore(): void {
    this.storeSub = this.store._store.subscribe((store) => {
      if (store && store.quotationGroups && store.quotationGroups.length > 0) {
        this.quotationGroups = store.quotationGroups;
      } else {
        this.quotationGroups = [];
      }
    });
  }

  private handleRouterChange(): void {

    this.router.events.subscribe(
      (routerChange) => {
        if ((routerChange instanceof NavigationStart)) {
          console.log(routerChange);
          // this.filterService.clear();
        }
      },
      (error) => { }
    );
  }

  ngOnInit() {
    this.subscribeStore();
    this.handleRouterChange();
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
