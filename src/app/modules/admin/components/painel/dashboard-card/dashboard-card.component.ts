import { Component, OnInit, Input, ViewChild, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { showup } from 'src/app/helpers/animations/animations.helper';
import { DashBoardCard } from '../../../models';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
  animations: [showup]
})
export class DashboardCardComponent implements OnInit, AfterViewInit {

  @ViewChild('cardComponent') cardComponent: ElementRef;

  @Input() config: DashBoardCard;
  @Input() purveyor: boolean;


  constructor() { }


  private changeHeight() {

    if (this.purveyor) {
      const height = document.getElementById('card-select-brand').offsetHeight;
      this.cardComponent.nativeElement.style.height = `${height}px`;
    }

  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeHeight();

  }


  ngOnInit() { }


  ngAfterViewInit() {
    this.changeHeight();

  }

}
