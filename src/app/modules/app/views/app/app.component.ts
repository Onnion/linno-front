import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivationStart, ActivatedRoute } from '@angular/router';
import { ROLES } from 'src/app/app.roles';
import { AclService } from 'ng2-acl';
import { routerTransition } from 'src/app/helpers/animations/animations.helper';
import { RootComponent } from 'src/app/helpers/root-app/root-app';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent extends RootComponent implements OnInit {
  public shouldShowFixeds = true;
  public shouldShowNav = true;

  constructor(private aclService: AclService, private active: ActivatedRoute, private router: Router) {
    super('app');
  }

  public listener(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof ActivationStart) {
        const path = event.snapshot.routeConfig.path;
        this.shouldShowFixeds = path !== 'login';
        this.shouldShowNav = ((path !== 'user') && (path !== 'login'));
      }
    });
  }

  public getHeight(): string {
    return `calc(100vh - ${this.shouldShowNav ? '110' : '0'}px)`
  }

  ngOnInit() {
    this.aclService.setAbilities(ROLES)
    this.listener();
    this.shouldShowFixeds = !(this.active.snapshot.firstChild.url[0].path === 'login');
    this.shouldShowNav = !(this.active.snapshot.firstChild.url[0].path === 'login');

  }

}
