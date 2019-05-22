import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public a;
  public b;
  public c;
  public d;

  public getRandom(): void {
    this.a = Math.floor(Math.random() * 100) + 1;
    this.b = Math.floor(Math.random() * 100) + 1;
    this.c = Math.floor(Math.random() * 100) + 1;
    this.d = Math.floor(Math.random() * 100) + 1;

  }

  public getMonth(): string {
    return moment().format('MMMM');
  }

  public ngOnInit() {
    this.getRandom();
  }

}
