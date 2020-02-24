import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import * as moment from 'moment';
import { Factory } from '../../models/factory.model';
import { MatSnackBar } from '@angular/material';
import { Quotation } from '../../models/quote.model';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit, OnDestroy {

  @Output() acceptOrder: EventEmitter<any> = new EventEmitter<any>();
  @Input() quotation: Quotation;

  public accept = false;
  public refuse = false;
  public count_down: string = 'algo';
  private timer: Subscription;

  constructor(private _snackBar: MatSnackBar) { }

  private countDown(): void {
    const expire_in = new Date(this.quotation.expire_in).getTime();
    const current = new Date().getTime();
    const diff = expire_in - current;
    let duration = moment.duration(diff * 1000);

    const timer = interval(1000);

    this.timer = timer.subscribe(() => {
      duration = moment.duration(duration.asMilliseconds() - 1000);
      console.log(duration);
      this.count_down = `${duration.minutes()}:${duration.seconds()}`;
    });
  }

  public showFactory(factor: Factory): void {
    this._snackBar.open(factor.trade_name, '', {
      duration: 2000,
    });
  } u

  public acceptAction() {
    this.accept = true;
    this.acceptOrder.emit(this.quotation);
  }

  public activeMoreOptions() {
    console.log('active');
  }

  ngOnInit() {
    this.countDown();
  }

  ngOnDestroy() {
    // clearInterval(this.timer);
    this.timer.unsubscribe();
  }

}
