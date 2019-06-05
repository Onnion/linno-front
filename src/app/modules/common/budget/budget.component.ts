import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { detailExpand } from 'src/app/helpers/animations/animations.helper';
import * as moment  from 'moment';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
  animations: [detailExpand]
})
export class BudgetComponent implements OnInit {
  public shouldShowBudget = false;
  public data: any;
  public loading = false;

  constructor(private filterService: FilterService, private accountService: AccountService) { }

  private subscribeFiltersUi(): void {
    this.filterService.filter.subscribe((filters) => {
      this.shouldShowBudget = filters.times.id === 'THIS_MONTH';

      if (filters.account && filters.account.id && this.shouldShowBudget) {
        this.getBudget();
      }

    });
  }

  private getBudget(): void {
    this.loading = true;
    this.accountService.getBudget().subscribe(
      (data: any) => {
        this.data = data && data.percentage_consumed || null;
        this.loading = false;
      },
      (error: any) => {
        this.loading = true;
        console.log(error);
      }
    );
  }

  public getMonth(): string {
    return moment().format('MMMM');
  }

  ngOnInit() {
    this.subscribeFiltersUi();
  }

}
