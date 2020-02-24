import { Component, OnInit } from '@angular/core';
import { listNiches, listObjShowup } from 'src/app/helpers/animations/animations.helper';
import { ActivatedRoute } from '@angular/router';
import { DashBoardCard } from '../../../models';
import { SaleService } from '../../../services/entites/sale/sale.service';
import { NotifyService } from '../../../services/notify/notify.service';
import { ListComponent } from 'src/app/helpers/list-component/list-component.component';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css'],
  animations: [listNiches, listObjShowup]
})
export class InvoiceDetailComponent extends ListComponent implements OnInit {
  public invoice: any;

  protected notify;
  protected service;
  public methodLoad = 'getInvoiceDetail';
  public safe_pagination = true;
  public displayedProductsColumns: string[];
  public displayedPaymentsColumns: string[];
  public cards: DashBoardCard[];


  constructor(
    private actived: ActivatedRoute,
    private saleService: SaleService,
    private notifyService: NotifyService) {
    super();
    this.notify = this.notifyService;
    this.service = this.saleService;
  }


  private initTableConfigs(): void {
    const id = this.actived.snapshot.params['id'];
    this.options = { id };

  }


  private initCards(): void {
    this.cards = [
      {
        bg: 'bg-gradient-green',
        material: true,
        title: 'Nota', content: this.componentData.code, icon: null, footer: '', price: false
      },
      {
        bg: 'bg-gradient-orange',
        material: true,
        title: 'Itens', content: this.componentData.products.length, icon: null, footer: '', price: false
      },
      {
        bg: 'bg-gradient-info',
        material: true,
        title: 'Total da nota', content: this.componentData.original_value, icon: 'attach_money', footer: '', price: true
      },
      {
        bg: 'bg-gradient-green',
        material: true,
        title: 'Total a repassar', content: this.componentData.value, icon: 'attach_money', footer: '', price: true
      }


    ];
  }

  public calcDiscount(invoice: any): number {
    return invoice.value * (invoice.tax / 100);
  }


  ngOnInit() {
    this.initTableConfigs();
    this.loadData();

    this.doneLoad.subscribe( () => this.initCards() );


  }

}
