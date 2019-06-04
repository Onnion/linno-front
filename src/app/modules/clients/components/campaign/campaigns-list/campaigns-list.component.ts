import { Component, OnInit, HostListener } from '@angular/core';
import { ListComponent } from 'src/app/helpers/list/list-components.helpers';
import { listObjShowup, detailExpand } from 'src/app/helpers/animations/animations.helper';
import { AccountService } from 'src/app/services/account/account.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css'],
  providers: [AccountService],
  animations: [listObjShowup, detailExpand]
})
export class CampaignsListComponent extends ListComponent implements OnInit {
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
    this.filterService.filter.subscribe(filter => {

      if (filter.account) {
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
}
