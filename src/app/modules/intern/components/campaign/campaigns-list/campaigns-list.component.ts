import { Component, OnInit, HostListener } from '@angular/core';
import { ListComponent, ComponentDataSource } from 'src/app/helpers/list/list-components.helpers';
import { listObjShowup, detailExpand } from 'src/app/helpers/animations/animations.helper';
// import { CampaignService } from 'src/app/services/entities/campaigns/campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css'],
  // providers: [CampaignService],
  animations: [listObjShowup, detailExpand]
})
export class CampaignsListComponent extends ListComponent implements OnInit {  
  public displayedColumns = ['data', 'status', 'media', 'number'];


  constructor(
    // private campaignService: CampaignService,
    private router: Router) {
    super();
  }

  private initListComponentConfigs(): void {
    // this.service = this.campaignService;
    this.expandedElement = true;
  }

  @HostListener('window:resize', ['$event'])
  onresize($event) {
    this.setIsMobile($event);
  }
  
  ngOnInit() {
    this.initListComponentConfigs();
    const list = [
      {'data': new Date().toString(), 'status': 'Atendida', 'media': 'http://dcweb.directdial.com.br/extrato/gravacao/id/MTQ0MWY1MWUtOWFlOS00NDU4LTljYTMtZGViYWQyZmRjMzY4', 'number': '(83) 99962 - 5041'},
      {'data': new Date().toString(), 'status': 'Atendida', 'media': 'http://dcweb.directdial.com.br/extrato/gravacao/id/MTQ0MWY1MWUtOWFlOS00NDU4LTljYTMtZGViYWQyZmRjMzY4', 'number': '(83) 99962 - 5041'},
      {'data': new Date().toString(), 'status': 'Atendida', 'media': 'http://dcweb.directdial.com.br/extrato/gravacao/id/MTQ0MWY1MWUtOWFlOS00NDU4LTljYTMtZGViYWQyZmRjMzY4', 'number': '(83) 99962 - 5041'},
      {'data': new Date().toString(), 'status': 'Atendida', 'media': 'http://dcweb.directdial.com.br/extrato/gravacao/id/MTQ0MWY1MWUtOWFlOS00NDU4LTljYTMtZGViYWQyZmRjMzY4', 'number': '(83) 99962 - 5041'},
      {'data': new Date().toString(), 'status': 'Atendida', 'media': 'http://dcweb.directdial.com.br/extrato/gravacao/id/MTQ0MWY1MWUtOWFlOS00NDU4LTljYTMtZGViYWQyZmRjMzY4', 'number': '(83) 99962 - 5041'}
    ]

    this.loadData(list);

    
  }
}


