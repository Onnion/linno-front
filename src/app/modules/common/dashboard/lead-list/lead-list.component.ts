import { Component, OnInit, HostListener, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ListComponent } from 'src/app/helpers/list/list-components.helpers';
import { listObjShowup, detailExpand } from 'src/app/helpers/animations/animations.helper';
import { AccountService } from 'src/app/services/account/account.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css'],
  providers: [AccountService],
  animations: [listObjShowup, detailExpand]
})
export class LeadListComponent extends ListComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) pagination: MatPaginator;

  private filterEvents: Subscription;
  public displayedColumns = ['data', 'status', 'media', 'number'];

  constructor(
    private accountService: AccountService,
    private $filterService: FilterService) {
    super();
  }

  private initListComponentConfigs(): void {
    this.service = this.accountService;
    this.filterService = this.$filterService;
    this.expandedElement = true;
    this.methodLoad = 'getCalls';
  }

  private subscribeFiltersUi(): void {
    this.filterEvents = this.filterService.filter.subscribe(filters => {
      if (filters.account && this.filterService.shouldCustomSearch()) {
        this.page = 1;
        this.options = { account_id: filters.account.id };
        this.loadData(null, window.innerWidth <= 991);
      }
    });
  }

  public getTitle(element): string {
    return element.account.name;
  }

  ngOnInit() {
    this.initListComponentConfigs();
    this.subscribeFiltersUi();
  }

  ngOnDestroy() {
    this.filterService.clear();
    this.filterEvents.unsubscribe();
  }

  ngAfterViewInit() {

    this.doneLoad.subscribe(() => {
      setTimeout(() => {
        this.$pagination = this.pagination;
        this.pagination.pageIndex = this.page - 1;
      }, 100);
    });

  }
}
