import { Component, OnInit, HostBinding, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnChanges {
  @HostBinding('style.min-height') minHeight = '100%';
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.justify-content') justifyContent = 'center';
  @HostBinding('style.align-items') alignItems = 'center';
  @HostBinding('style.position') position = 'absolute';
  @HostBinding('style.min-width') minWidth = '100%';
  @HostBinding('style.left') left = '0';
  @HostBinding('style.top') top = '0';

  @Input() loading: boolean;

  constructor() { }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const loading: SimpleChange = changes.loading;
    this.display = !loading.currentValue ? 'none' : 'flex';
  }

}
