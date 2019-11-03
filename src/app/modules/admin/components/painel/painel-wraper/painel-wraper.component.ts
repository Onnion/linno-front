import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from 'src/app/helpers/animations/animations.helper';

@Component({
  selector: 'app-painel-wraper',
  templateUrl: './painel-wraper.component.html',
  styleUrls: ['./painel-wraper.component.css'],
  animations: [routerTransition]
})
export class PainelWraperComponent implements OnInit {


  constructor() { }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // setMarginMainContent();
  }


  ngOnInit() {
    // setMarginMainContent();
  }

}
