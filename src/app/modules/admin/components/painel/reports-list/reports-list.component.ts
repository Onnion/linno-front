import { Component, OnInit } from '@angular/core';
import { listObjShowup, showup, listNiches } from 'src/app/helpers/animations/animations.helper';
import { ActivatedRoute } from '@angular/router';
import { TYPES } from 'src/app/helpers/consts/consts.helpers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import * as _ from 'lodash';
import { ListComponent } from 'src/app/helpers/list-component/list-component.component';
import { ReportType } from '../../../models/report-type.model';
import { ReportsService } from '../../../services/entites/reports/reports.service';
import { NotifyService } from '../../../services/notify/notify.service';
import { ContractsService } from '../../../services/entites/contracts/contracts.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css'],
  animations: [listObjShowup, showup, listNiches]
})
export class ReportsListComponent extends ListComponent implements OnInit {

  protected notify;
  protected service;
  private dataRouter: 'vendas' | 'abastecimentos' | 'retornos';
  public type: ReportType;
  public form: FormGroup;

  // CREAT MODEL
  public months: any[];

  // CREAT MODEL
  public contracts: any[];
  public loading = false;

  // CREAT MODEL
  public cards: any[];

  constructor(
    private salesService: ReportsService,
    private notifyService: NotifyService,
    private active: ActivatedRoute,
    // private utilsService: UtilsService,
    private fb: FormBuilder,
    private contractsService: ContractsService
  ) {
    super();
    this.notify = this.notifyService;
  }


  private initConfigs(): void {
    this.service = this.salesService;
    this.methodLoad = 'getReportList';

    this.dataRouter = this.active.snapshot.params['type'];
    this.type = TYPES.filter((type: ReportType) => type.typeBr === this.dataRouter)[0];

    this.safe_pagination = this.type.type === 'sales' ? true : false;

    const options = { status: 'active', pageSize: 999999999, orderBy: 'brand.name', sortedBy: 'asc' };
    this.status_form.loading = true;

    this.contractsService.getData(options).subscribe(
      (contracts) => {
        this.status_form.loading = false;

        this.contracts = contracts.data;

      },
      (error) => {
        this.status_form.loading = false;

      }
    );
  }


  private initCards(): void {
    this.cards = [
      {
        bg: 'bg-gradient-green',
        material: true,
        title: 'Total de Vendas', content: this.getTotal(), icon: 'attach_money', footer: '', price: true
      }
    ];
  }


  private initFormControls(): void {
    this.form = this.fb.group(
      {
        brand_id: ['', [Validators.required]],
        month: ['', Validators.required]
      }
    );

  }


  public loadMonths(): void {
    const brand_id = this.form.controls.brand_id.value;
    this.form.controls.month.setValue('');
    this.status_form.loading = true;
    // this.utilsService.getMonths(brand_id).subscribe(
    //   (months) => {
    //     this.months = _.orderBy(months.data.map((month) => {
    //       return { value: month.month, title: moment(month.month).format('MMMM YYYY') };
    //     }), ['value'], ['desc']);
    //     this.status_form.loading = false;
    //   },
    //   (error) => {
    //     this.status_form.loading = false;

    //   }
    // );
  }

  public getTotal(): number {
    return this.componentData.reduce((sum, current) => sum + parseFloat(current.price), 0);

  }


  public submit(): void {
    if (this.form.valid) {
      const data = this.form.value;

      this.options = {
        ...data,
        type: this.type.type,
        filterBy: 'created_at'
      };

      this.loadData();
    }

  }


  ngOnInit() {
    this.initFormControls();
    this.initConfigs();

    this.doneLoad.subscribe(
      () => {
        this.initCards();
      }
    );

  }


}
