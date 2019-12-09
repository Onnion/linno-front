import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-wrapper',
  template: `
  <div class="container">
    <div class="row">
    <router-outlet></router-outlet>
    </div>
  </div>
`,})
export class UsersWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
