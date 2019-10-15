import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public orders = [];

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  public showName(title: string): void {
    this._snackBar.open(title, '', {
      duration: 2000,
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
    this.handleRouterChange();
  }

}
