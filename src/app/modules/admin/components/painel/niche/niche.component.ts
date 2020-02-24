import { Component, OnInit, Input } from '@angular/core';
import { Contract } from '../../../models';
// import { getImage } from 'src/app/app.utils';

@Component({
  selector: 'app-niche',
  templateUrl: './niche.component.html',
  styleUrls: ['./niche.component.css']
})
export class NicheComponent implements OnInit {

  @Input() contract: Contract;
  @Input() skeleton: boolean;


  constructor() { }


  public getImage(brand: any): string {
    // return getImage(brand);
    return '';
  }


  ngOnInit() {
  }

}
