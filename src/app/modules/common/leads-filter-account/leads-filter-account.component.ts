import { Component, OnInit, HostBinding } from '@angular/core';
import { LeadsFilterAccountType, MinFilterAccountType } from '../models/leads-filter-account.model';
import { FilterService } from 'src/app/services/filter/filter.service';
import { AccountService } from 'src/app/services/account/account.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-leads-filter-account',
  templateUrl: './leads-filter-account.component.html',
  styleUrls: ['./leads-filter-account.component.css']
})
export class LeadsFilterAccountComponent implements OnInit {
  // public shouldOpenFormDate: boolean;
  private DEFAULT_ACCOUNT: MinFilterAccountType[] = [{picture: '', id: 'all', name: 'Todas as Revendas'}];
  public selectedAccountMenu: LeadsFilterAccountType;
  public filteredAccountsMenu: Observable<LeadsFilterAccountType[]>;
  public accountsMenu: LeadsFilterAccountType[];
  public form: FormGroup;

  // @ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;
  @HostBinding('style.width') width = '350px';

  constructor(private filterService: FilterService, private accountService: AccountService, private fb: FormBuilder) { }

  public selectAccountMenu(account: LeadsFilterAccountType): void {
    this.selectedAccountMenu = account;
    this.filterService.setAccount(this.selectedAccountMenu);
  }

  private subscribeFiltersUi(): void {
    this.filterService.filter.subscribe((filters) => {
      this.accountsMenu = this.filterService.getAccountMenu();
      this.watchFilter();
      this.selectedAccountMenu = filters.account;
      if (filters.account) {
        this.form.controls['account'].setValue(this.selectedAccountMenu.name);
      }
    });
  }

  private initFormControls(): void {
    this.form = this.fb.group({
      account: ['', []]
    });
  }

  private sortNames(current: LeadsFilterAccountType, prevent: LeadsFilterAccountType): number {
    return current.name < prevent.name ? -1 : current.name > prevent.name ? 1 : 0;
  }

  private _filterAccounts(value: string): LeadsFilterAccountType[] {
    const filterValue = (value && (typeof value !== 'object')) && value.toLowerCase();

    return [
      ...this.DEFAULT_ACCOUNT,
      ...this.accountsMenu
      .filter(account => account.name.toLowerCase().includes(filterValue))
      .sort((current, prevent) => this.sortNames(current, prevent))
    ];
  }

  private watchFilter(): void {
    const { account } = this.form.controls;
    this.filteredAccountsMenu = account.valueChanges.pipe(
      startWith(''),
      map((accountStr: string) =>
        accountStr ? this._filterAccounts(accountStr) : this.accountsMenu.slice()
      )
    );
  }

  ngOnInit() {
    this.initFormControls();
    this.accountService.getAccounts().subscribe((accounts: LeadsFilterAccountType[]) => {
      this.filterService.initFilterAccounts(accounts.sort((current, prevent) => this.sortNames(current, prevent)));
    });
    this.subscribeFiltersUi();
  }
}
