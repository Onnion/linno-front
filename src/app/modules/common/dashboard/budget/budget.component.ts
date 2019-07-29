import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { detailExpand } from 'src/app/helpers/animations/animations.helper';
import * as moment  from 'moment';
import { AccountService } from 'src/app/services/account/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
  animations: [detailExpand]
})
export class BudgetComponent implements OnInit, OnDestroy {
  private filterEvents: Subscription;
  private subscribed = false;
  private account_id;
  public shouldShowBudget = false;
  public data: any;
  public loading = false;

  constructor(private filterService: FilterService, private accountService: AccountService) { }

  private subscribeFiltersUi(): void {
    this.filterEvents = this.filterService.filter.subscribe((filters) => {
      this.shouldShowBudget = filters.times.id === 'THIS_MONTH';
      if (filters.account && filters.account.id && (this.account_id !== filters.account.id) && this.shouldShowBudget) {
        this.account_id = filters.account.id;
        this.getBudget();
      }
    });
  }

  private getBudget(): void {
    this.loading = true;
    this.accountService.getBudget().subscribe(
      (data: any) => {
        this.data = data || null;
        this.loading = false;
      },
      (error: any) => {
        this.loading = true;
        console.log(error);
      }
    );
  }

  public getMonth(): string {
    return `Valor utilizado do dia ${moment().startOf('month').format('DD/MM')} até o dia ${moment().format('DD/MM')}`;
  }

  ngOnInit() {
    this.subscribeFiltersUi();
  }

  ngOnDestroy() {
    this.account_id = null;
    this.filterEvents.unsubscribe();
  }
}
