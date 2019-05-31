import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { LeadsFilterAccountType } from '../models/leads-filter-account.model';
import { MatMenuTrigger } from '@angular/material';
import { FilterService } from 'src/app/services/filter/filter.service';
import { AccountService } from 'src/app/services/account/account.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'app-leads-filter-account',
  templateUrl: './leads-filter-account.component.html',
  styleUrls: ['./leads-filter-account.component.css']
})
export class LeadsFilterAccountComponent implements OnInit {
  public shouldOpenFormDate: boolean;
  public selectedAccountMenu: LeadsFilterAccountType;
  public filteredAccountsMenu: Observable<LeadsFilterAccountType[]>;
  public accountsMenu: LeadsFilterAccountType[];
  public form: FormGroup;

  // @ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;
  @HostBinding('style.margin') margin = '0px 15px';

  constructor(public filterService: FilterService, private accountService: AccountService, private fb: FormBuilder) { }

  public selectTimesMenu(): void {
    const { account } = this.form.value;
    this.selectedAccountMenu = this.accountsMenu.filter($account => $account.name === account)[0];
    this.filterService.setAccount(this.selectedAccountMenu);
    // this.matMenuTrigger.closeMenu();
  }

  private subscribeFiltersUi() {
    this.filterService.filter.subscribe((filters) => {
      this.accountsMenu = this.filterService.getAccountMenu();
      this.watchFilter();
      this.selectedAccountMenu = filters.account;
      // this.form.controls.account.setValue(this.selectTimesMenu.name);
    });
  }

  private initFormControls(): void {
    this.form = this.fb.group({
      account: ["", Validators.required]
    });
  }

  private _filterAccounts(value: string): LeadsFilterAccountType[] {
    const filterValue = (value && (typeof value !== 'object')) && value.toLowerCase();
    return this.accountsMenu.filter(account => account.name.toLowerCase().includes(filterValue));
  }

  private watchFilter(): void {
    const { account } = this.form.controls;
    this.filteredAccountsMenu = account.valueChanges.pipe(
      startWith(""),
      map((accountStr: string) =>
        accountStr ? this._filterAccounts(accountStr) : this.accountsMenu.slice()
      )
    );
  }

  ngOnInit() {
    this.initFormControls();
    this.accountService.getAccounts().subscribe((accounts: LeadsFilterAccountType[]) => {
      this.filterService.initFilterAccounts(accounts);
    });
    this.subscribeFiltersUi();
  }
}
