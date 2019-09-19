import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeadsFilterTimesType } from 'src/app/modules/common/models/leads-filter-times.model';
import { Filter } from 'src/app/models';
import { extendMoment, MomentRange } from 'moment-range';
import { LeadsFilterAccountType, MinFilterAccountType } from 'src/app/modules/common/models/leads-filter-account.model';
import { Budgetype } from 'src/app/modules/common/models/budget.model';
import * as Moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private accountMenu: LeadsFilterAccountType[];
  private timesMenu: LeadsFilterTimesType[];
  private account: (LeadsFilterAccountType | MinFilterAccountType);
  private budgetObj: Budgetype;
  private times: LeadsFilterTimesType;
  private moment: MomentRange;
  public filter: BehaviorSubject<Filter>;
  public budget: BehaviorSubject<Budgetype>;

  constructor() {
    this.moment = extendMoment(Moment);
    this.initState();

    this.filter = new BehaviorSubject<Filter>({
      times: this.times,
      account: this.account
    });

    this.budget = new BehaviorSubject<Budgetype>(this.budgetObj);
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
      { id: 'CUSTOM', shouldClose: false, label: 'Personalizado', start_date: null, end_date: null },
    ];
    this.times = this.timesMenu[6];
    this.accountMenu = [];
    this.budgetObj = {
      consumed: 0,
      google_budget: 0,
      moura_percent: '',
      percentage_consumed: 0
    };
  }

  private next(): void {
    this.filter.next({ times: this.times, account: this.account });
  }

  private nextBudget(): void {
    this.budget.next(this.budgetObj);
  }

  public shouldCustomSearch(): boolean {
    return ((this.times.id !== 'CUSTOM') || !!(this.times.id === 'CUSTOM' && this.times.start_date));
  }

  public setFilterTime(times: LeadsFilterTimesType): void {
    this.times = times;
    this.next();
  }

  public setBudget(budget: Budgetype): void {
    this.budgetObj = budget;
    this.nextBudget();
  }

  public initFilterAccounts(accounts: LeadsFilterAccountType[]) {
    this.accountMenu = accounts;
    this.setAccount(accounts[0]);
  }

  public setAccount(_account: (LeadsFilterAccountType | MinFilterAccountType)): void {
    const filtredAccount = this.accountMenu.filter($account => $account.id === _account.id)[0];
    this.account = 'created_at' in _account ? filtredAccount : _account;

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

  public clear(): void {
    this.accountMenu = undefined;
    this.account = undefined;
    this.times = this.timesMenu[6];
    this.next();
  }
}
