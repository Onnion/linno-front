import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { detailExpand } from 'src/app/helpers/animations/animations.helper';
import { AccountService } from 'src/app/services/account/account.service';
import { GoogleService } from 'src/app/services/google/google.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [detailExpand]
})
export class DashboardComponent implements OnInit {
  public idAccount;
  public googleReposts;
  public cards = [
    { observable: true, name: "impressions", title: "Quantidade de vezes que o anúncio apareceu" },
    { observable: true, name: "clicks", title: "Cliques no anúncio" },
    { method: 'getCallsAnswereds', service: this.accountService, name: "calls", title: "Ligações Atendidas" },
    { method: 'getCallsMissed', service: this.accountService, name: "calls", title: "Ligações Não Atendidas" }
  ];

  constructor(private googleService: GoogleService, private filterService: FilterService, public accountService: AccountService) {
  }

  public getReports(): void {
    this.googleService.getReports().subscribe(
      (data: any) => this.googleReposts = data.attributes ? data.attributes : data,
      (error: any) => console.log(error)
    );
  }

  private subscribeFiltersUi() {
    this.filterService.filter.subscribe((filters) => {
      if (filters.account && filters.account.id) {
        this.idAccount = filters.account.id
        this.getReports();
      }
    });
  }

  public ngOnInit() {
    this.subscribeFiltersUi();
  }
}
