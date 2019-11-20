import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { listObjShowup } from 'src/app/helpers/animations/animations.helper';

@Component({
  selector: 'app-purveyor-product-detail',
  templateUrl: './purveyor-product-detail.component.html',
  styleUrls: ['./purveyor-product-detail.component.css'],
  animations: [listObjShowup]
})
export class PurveyorProductDetailComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Input() detail: any;

  public active = 'suply';


  constructor() { }


  public changeTab(tab: string): void {
    this.active = tab;
  }


  public cancel(): void {
    this.close.emit(true);
  }


  ngOnInit() {
    console.log(this.detail);
  }


}
