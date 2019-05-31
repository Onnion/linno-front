import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit, OnChanges {

  @Input('title') title: string;
  @Input('id') id: number;
  @Input('method') method: string;
  @Input('service') service: any;

  public loading = false;
  public data: 0;

  constructor() { }

  ngOnInit() {
 
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.id && this.method && this.service) {
      this.loading = true;

      this.service[this.method]({account_id: this.id}).subscribe(
        (data) => {
          this.loading = false;
          this.data = (data && data.meta) && data.meta.pagination.count;
        },
        (error) => {
          this.loading = false;
          console.log(error);
        });
    }

  }

}
