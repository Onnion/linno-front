import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { listNiches } from 'src/app/helpers/animations/animations.helper';
import { TYPES } from 'src/app/helpers/consts/consts.helpers';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ReportType } from '../../../models/report-type.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  animations: [listNiches]
})
export class ReportsComponent implements OnInit, OnDestroy {

  private intervalNavigate: Subscription;

  public today = new Date();
  public TYPES: ReportType[];
  public height: SafeStyle;


  constructor(private router: Router, private sanitization: DomSanitizer) { }


  private initTypes(): void {
    this.TYPES = TYPES;

  }


  public selectReport(report: ReportType): void {
    this.TYPES.map(($report: ReportType) => $report.active = false);
    report.active = true;

    this.intervalNavigate = interval(500).subscribe(
      (endTime) => {
        this.router.navigate([`/painel/relatorios/${report.typeBr}`]);
      },
      (error) => {}
    );

  }


  ngOnInit() {
    setTimeout( () => {
      this.initTypes();

    }, 520);

    // const height = setMarginMainContent();
    // this.height = this.sanitization.bypassSecurityTrustStyle(`height: calc(100vh - ${height}px);`);

  }


  ngOnDestroy() {
    if (this.intervalNavigate) { this.intervalNavigate.unsubscribe(); }
  }

}
