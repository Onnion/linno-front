import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { Subscription } from 'rxjs';
import { AclService } from 'ng2-acl';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit, OnChanges, OnDestroy {
  private filterEvents: Subscription;

  @Input('title') title: string;
  @Input('bullet') bullet: boolean;
  @Input('name') name: string;
  @Input('method') method: string;
  @Input('service') service: any;
  @Input('data') data: any;
  @Input('observable') observable: any;
  @Input('changeFilter') change: EventEmitter<any> = new EventEmitter<any>();

  public message = false;
  public loading = true;
  public _data: number | string;
  public shouldShowBullet = false;

  constructor(private filterService: FilterService, private aclService: AclService) { }

  public showMessage($event): void {
    this.message = $event;
  }

  public showBullet(): boolean {
    return !this.loading && this.bullet && (this.shouldShowBullet && this.aclService.can('see-bullet'));
  }

  ngOnInit() {
    this.filterEvents = this.filterService.filter.subscribe((filters) => {
      if (filters.account && filters.account.id) {
        this.shouldShowBullet = filters.account.status_call;
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
