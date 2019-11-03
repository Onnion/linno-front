import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Chart } from 'chart.js';
import { colors } from 'src/app/helpers/colors/colors.helpers';
import * as moment from 'moment';
import { DashboardService } from '../../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard-cash-balance',
  templateUrl: './dashboard-cash-balance.component.html',
  styleUrls: ['./dashboard-cash-balance.component.css']
})
export class DashboardCashBalanceComponent implements OnInit, OnDestroy {
  public lastUpdate: string;
  public lastUpdateMoment: moment.Moment;
  private heat: Subscription;
  private lastUpdateObserver: Subscription;
  public chart: [];
  public showChart = false;


  constructor(private dashboardService: DashboardService) { }


  private heatChart(): void {
    const heat = interval(120000);
    this.heat = heat.subscribe(() => this.initChartCashBalance());

  }


  private initChartCashBalance(): void {
    this.dashboardService.getCashBalance().subscribe(
      (cashBalance) => {
        const labels = cashBalance.map((balance) => balance.description);
        const data = cashBalance.map((balance) => balance.total);
        // const background = cashBalance.map((balance) => this.genareteBackground());
        this.updateFromNow();

        if (cashBalance.length > 0) {
          this.showChart = true;
          setTimeout(() => {
            this.chart = new Chart('canvas', {
              type: 'pie',
              data: {
                datasets: [{
                  data,
                  backgroundColor: colors.sort(() => Math.random() - 0.5)
                }],
                labels: labels,
              },
              options: {
                responsive: true,
                legend: {
                  position: 'left',
                  labels: {
                    fontColor: '#FFFFFF',
                    fontSize: 14,
                  }
                },
              }
            });
          }, 100);
        }

      },
      (error) => {

      }
    );
  }


  public updateFromNow(): void {
    const lastUpdateMoment = interval(1000);
    this.lastUpdateMoment = moment();

    this.lastUpdateObserver = lastUpdateMoment.subscribe(
      () => {
        this.lastUpdate = this.lastUpdateMoment.fromNow();

      }
    );
  }


  ngOnInit() {
    this.initChartCashBalance();
    this.heatChart();
  }


  ngOnDestroy() {
    this.heat.unsubscribe();
    this.lastUpdateObserver.unsubscribe();
  }


}
