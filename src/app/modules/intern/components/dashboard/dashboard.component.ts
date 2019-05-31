import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FilterService } from 'src/app/services/filter/filter.service';
import { detailExpand } from 'src/app/helpers/animations/animations.helper';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [detailExpand]
})
export class DashboardComponent implements OnInit {
  public idAccount;
  public cards = [
    { id: '', method: '', service: '', name: "times", title: "Quantidade de vezes que o anúncio apareceu" },
    { id: '', method: '', service: '', name: "clicks", title: "Cliques no anúncio" },
    { id: this.idAccount , method: 'getCallsAnswereds', service: this.accountService, name: "calls", title: "Ligações Atendidas" },
    { id: this.idAccount , method: 'getCallsMissed', service: this.accountService, name: "calls", title: "Ligações Não Atendidas" }
  ];
  public shouldShowBudget = false;

  constructor(private filterService: FilterService, public accountService: AccountService) {
  }

  private subscribeFiltersUi() {
    this.filterService.filter.subscribe((filters) => {
      this.shouldShowBudget = filters.times.id === 'THIS_MONTH';
      
      if (filters.account && filters.account.id) {
        this.idAccount = filters.account.id
      }
    });
  }

  public getMonth(): string {
    return moment().format('MMMM');
  }

  public ngOnInit() {
    this.subscribeFiltersUi();
  }
}
