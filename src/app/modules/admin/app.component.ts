import { Component, OnInit } from '@angular/core';
import { AclService } from 'ng2-acl';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../common/services/auth/auth.service';
import { ROLES } from 'src/app/app.roles';
import { routerTransition } from 'src/app/helpers/animations/animations.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]

})
export class AppComponent implements OnInit {

  constructor(private aclService: AclService, public auth: AuthService, private router: Router) { }

  ngOnInit() {
    console.log('a');
    // this.aclService.setAbilities(ROLES);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.stop();
      }
    });

  }
}
