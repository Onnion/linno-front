import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeadsFilterTimesType } from 'src/app/modules/common/models/leads-filter-times.model';
import { Filter } from 'src/app/models';
import * as Moment from 'moment';
import { extendMoment, MomentRange } from 'moment-range';
import { LeadsFilterAccountType } from 'src/app/modules/common/models/leads-filter-account.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private accountMenu: LeadsFilterAccountType[];
  private timesMenu: LeadsFilterTimesType[];
  private account: LeadsFilterAccountType;
  private times: LeadsFilterTimesType;
  private moment: MomentRange;
  public filter: BehaviorSubject<Filter>;

  constructor() {
    this.moment = extendMoment(Moment);
    this.initState();
    this.filter = new BehaviorSubject<Filter>({
      times: this.times,
      account: this.account
    });
  }

  private initState(): void {
    this.timesMenu = [
      { id: 'TODAY', shouldClose: true, label: 'Hoje' },
      { id: 'YESTERDAY', shouldClose: true, label: 'Ontem' },
      { id: 'LAST_7_DAYS', shouldClose: true, label: 'Últimos 7 dias' },
      { id: 'LAST_14_DAYS', shouldClose: true, label: 'Últimos 14 dias' },
      { id: 'LAST_30_DAYS', shouldClose: true, label: 'Últimos 30 dias' },
      { id: 'LAST_MONTH', shouldClose: true, label: 'Mês passado' },
      { id: 'THIS_MONTH', shouldClose: true, label: 'Este Mês' },
      // { id: 'custom', shouldClose: false, label: 'Personalizado' },
    ];
    this.times = this.timesMenu[6];
    this.accountMenu = [];
  }

  private next(): void {
    this.filter.next({ times: this.times, account: this.account });
  }

  public setFilterTime(range: Moment.Moment[], times: LeadsFilterTimesType): void {
    this.times = times;
    this.next();
  }

  public initFilterAccounts(accounts: LeadsFilterAccountType[]) {
    this.accountMenu = accounts;  
    this.setAccount(accounts[0]);
  }

  public setAccount(account: LeadsFilterAccountType): void {
    this.account = this.accountMenu.filter($account => $account.id === account.id)[0];
    this.next();
  }

  public getTimesMenu(): LeadsFilterTimesType[] {
    return this.timesMenu;
  }

  public getAccountMenu(): LeadsFilterAccountType[] {
    return this.accountMenu;
  }

  public getAccount(): LeadsFilterAccountType {
    return this.account;
  }

  public getTime(): LeadsFilterTimesType {
    return this.times;
  }
}