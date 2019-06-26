import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ListComponent } from 'src/app/helpers/list/list-components.helpers';
import { listObjShowup, detailExpand } from 'src/app/helpers/animations/animations.helper';
import { AccountService } from 'src/app/services/account/account.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css'],
  providers: [AccountService],
  animations: [listObjShowup, detailExpand]
})
export class LeadListComponent extends ListComponent implements OnInit, OnDestroy {
  private filterEvents: Subscription;
  private account_id;
  public displayedColumns = ['data', 'status', 'media', 'number'];

  constructor(
    private accountService: AccountService,
    private $filterService: FilterService) {
    super();
  }

  private initListComponentConfigs(): void {
    this.service = this.accountService;
    this.filterService = this.$filterService
    this.expandedElement = true;
    this.methodLoad = 'getCalls';
  }

  private subscribeFiltersUi(): void {
    this.filterEvents = this.filterService.filter.subscribe(filter => {
      if (filter.account) {
        this.page = 1;
        this.account_id = filter.account.id;
        this.options = { account_id: filter.account.id };
        this.loadData(null, window.innerWidth <= 991);
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onresize($event) {
    this.setIsMobile($event);
  }

  ngOnInit() {
    this.initListComponentConfigs();
    this.subscribeFiltersUi();
  }

  ngOnDestroy() {
    this.filterService.clear();
    this.filterEvents.unsubscribe();
  }
}
