import { Component, OnInit, ViewChild, Output, EventEmitter, HostBinding } from '@angular/core';
import {LeadsFilterTimesType} from '../models/leads-filter-times.model';
import { MatMenuTrigger } from '@angular/material';
import { NgbDate, NgbDatepickerConfig, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FilterService } from 'src/app/services/filter/filter.service';
import { extendMoment, MomentRange } from 'moment-range';
import * as Moment from 'moment';

@Component({
  selector: 'app-leads-filter-times',
  templateUrl: './leads-filter-times.component.html',
  styleUrls: ['./leads-filter-times.component.css'],
  providers: [NgbDatepickerConfig]
})
export class LeadsFilterTimesComponent implements OnInit {
  private moment: MomentRange;
  public shouldOpenFormDate: boolean;
  public selectedTimesMenu: LeadsFilterTimesType;
  public hoveredDate: NgbDate;
  public fromDate: NgbDate;
  public toDate: NgbDate;
  public width: number;
  public timesMenu: LeadsFilterTimesType[];

  @ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;
  @HostBinding('style.margin') margin = '0px 15px';

  constructor(private config: NgbDatepickerConfig, public filterService: FilterService) {
    this.moment = extendMoment(Moment);
  }

  // @TODO melhorar
  private checkType(range: any): range is LeadsFilterTimesType {
    return (<LeadsFilterTimesType>range).shouldClose !== undefined;
  }

  private createRangeDays($range: NgbDate[] | LeadsFilterTimesType): Moment.Moment[] {
    let rangeDays = [];
    let range: any;
    let period = 'days';

    if (this.checkType($range) && $range.min) {
      const start = $range.min.startOf('day');
      const end = this.moment().endOf('day');
      range = this.moment.range(start, end);

      switch ($range.id) {
        case 'today':
          period = 'hours';
          break;
        case 'custom':
          if (range.diff('days') > 59) {
            period = 'months';
          } 
          break;
        default:
          period = 'days';
          break
      }
    } else {
      const castedRange = $range as NgbDate[];
      if (castedRange.length > 0) {
        range = this.moment.range($range[0], $range[1]);
      }
    }

    if (range) {
      rangeDays = Array.from(range.by(period));
      return rangeDays;
    };
  }

  public selectRange(): void {
    const range: NgbDate[] = [this.fromDate, this.toDate];
    this.filterService.setFilterTime(this.createRangeDays(range), this.selectedTimesMenu);
    this.matMenuTrigger.closeMenu();
  }

  public selectTimesMenu(typeMenu: LeadsFilterTimesType, first: boolean = false): void {
    let range: LeadsFilterTimesType = typeMenu;
    
    if (!first && typeMenu.shouldClose) {
      this.matMenuTrigger.closeMenu();
    }

    if (typeMenu.id === 'custom') {
      this.shouldOpenFormDate = true;

      this.setWidth()
      .then((width) => {
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      this.shouldOpenFormDate = false;
    }

    this.selectedTimesMenu = typeMenu;
    this.filterService.setFilterTime(this.createRangeDays(range), typeMenu);
  }

  private initCalendarConfig(): void {
    const today: Moment.Moment = this.moment();
    this.config.maxDate = {year: today.year(), month: today.month(), day: today.date()};
  }

  private subscribeFiltersUi() {
    this.filterService.filter.subscribe((filters) => {
        this.selectedTimesMenu = filters.times;
    });
  }

  public setWidth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const outherWidth = document.querySelector('.ngb-dp-header').clientWidth;
        const defaultPadding = (15 * 10);
        this.width = outherWidth + defaultPadding;
        resolve(true);
      }, 100);
    });
  }
    
  public onDateSelection(date: NgbDate): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  public isHovered(date: NgbDate): boolean {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  public isInside(date: NgbDate): boolean {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  public isRange(date: NgbDate): boolean {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  ngOnInit() {
    this.initCalendarConfig();
    this.timesMenu = this.filterService.getTimesMenu();
    this.subscribeFiltersUi();
  }

}
