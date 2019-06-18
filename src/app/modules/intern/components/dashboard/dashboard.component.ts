import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { FilterService } from 'src/app/services/filter/filter.service';
import { detailExpand } from 'src/app/helpers/animations/animations.helper';
import { AccountService } from 'src/app/services/account/account.service';
import { GoogleService } from 'src/app/services/google/google.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [detailExpand]
})
export class DashboardComponent implements OnInit, OnDestroy {
  private filterEvents: Subscription;
  public idAccount;
  public googleReposts;
  public cards = [
    { observable: true, name: "impressions", title: "Quantidade de vezes que o anúncio apareceu" },
    { observable: true, name: "clicks", title: "Cliques no anúncio" },
    { method: 'getCallsAnswereds', service: this.accountService, name: "calls", title: "Ligações Atendidas" },
    { method: 'getCallsMissed', service: this.accountService, name: "calls", title: "Ligações Não Atendidas" }
  ];
  public shouldShowBudget = false;

  constructor(private googleService: GoogleService, private filterService: FilterService, public accountService: AccountService) {
  }

  public getReports(): void {
    this.googleService.getReports().subscribe(
      (data: any) => {
        this.googleReposts = data.attributes ? data.attributes : data;
      },
      (error: any) => console.log(error)
    );
  }

  private subscribeFiltersUi() {
    this.filterEvents = this.filterService.filter.subscribe((filters) => {
      this.shouldShowBudget = filters.times.id === 'THIS_MONTH';

      if (filters.account && filters.account.id) {
        this.idAccount = filters.account.id
        this.getReports();
      }
    });
  }

  public getMonth(): string {
    return moment().format('MMMM');
  }

  public ngOnInit() {
    this.subscribeFiltersUi();
  }

  ngOnDestroy() {
    this.filterEvents.unsubscribe();
  }
}
