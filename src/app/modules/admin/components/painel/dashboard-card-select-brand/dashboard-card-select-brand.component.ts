import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { showup } from 'src/app/helpers/animations/animations.helper';
// import { getImage } from 'src/app/app.utils';

@Component({
  selector: 'app-dashboard-card-select-brand',
  templateUrl: './dashboard-card-select-brand.component.html',
  styleUrls: ['./dashboard-card-select-brand.component.css'],
  animations: [showup]
})
export class DashboardCardSelectBrandComponent implements OnInit {

  @Input() brand: any;
  @Input() contracts: any[];
  @Output() changeBrand: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }


  public getImage(brand: any): string {
    // return getImage(brand);
    return '';
  }


  public brandSelected(id: number): void {
    if (this.contracts.length > 1) { this.changeBrand.emit(id); }
  }


  ngOnInit() { }

}
