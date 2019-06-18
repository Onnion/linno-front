import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit, OnChanges, OnDestroy {
  private filterEvents: Subscription;

  @Input('title') title: string;
  @Input('name') name: string;
  @Input('method') method: string;
  @Input('service') service: any;
  @Input('data') data: any;
  @Input('observable') observable: any;
  @Input('changeFilter') change: EventEmitter<any> = new EventEmitter<any>();

  public loading = true;
  public _data: number | string;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterEvents = this.filterService.filter.subscribe((filters) => {
      if (filters.account && filters.account.id) {
        if (!(this.observable) && this.method && this.service) {
          this.loading = true;

          this.service[this.method]().subscribe(
            (_data) => {
              this.loading = false;
              this._data = (_data && _data.meta) && _data.meta.pagination.total;
            },
            (error) => {
              this.loading = false;
              console.log(error);
            });
        } else {
          this.loading = true;
          this.change.emit(true);
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.observable && changes.data && changes.data.currentValue) {
      this._data = changes.data.currentValue.error ? '-' : changes.data.currentValue[this.name];
      this.loading = false;
    }
  }

  ngOnDestroy() {
    this.filterEvents.unsubscribe();
    this.filterService.clear();
  }

}
