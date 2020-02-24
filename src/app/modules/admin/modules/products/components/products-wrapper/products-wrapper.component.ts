import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-wrapper',
  template: `
  <div class="container">
    <div class="row">
    <router-outlet></router-outlet>
    </div>
  </div>
`})
export class ProductsWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
