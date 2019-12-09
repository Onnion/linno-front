import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-wrapper',
  template: `
    <div class="wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-content">
          <app-navbar></app-navbar>
          <div class="content pt-5">
            <router-outlet></router-outlet>
          </div>
      </div>
    </div>
  `
})
export class AdminWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
