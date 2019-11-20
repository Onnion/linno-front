import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/helpers/animations/animations.helper';

@Component({
  selector: 'app-reports-wraper',
  templateUrl: './reports-wraper.component.html',
  styleUrls: ['./reports-wraper.component.css'],
  animations: [routerTransition]

})
export class ReportsWraperComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
