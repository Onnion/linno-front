import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../common/services/auth/auth.service';
import { routerTransition } from '../common/animations/animations.helper';
import { RootComponent } from '../common/components/root-app/root-app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]

})
export class AppComponent extends RootComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
    super('admin');
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.stop();
      }
    });

  }
}
