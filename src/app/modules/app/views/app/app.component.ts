import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { ProductService } from '../../services/product/product.service';
import { Router, RouterEvent, ActivationStart, ActivatedRoute } from '@angular/router';
import { ROLES } from 'src/app/app.roles';
import { AclService } from 'ng2-acl';
import { routerTransition } from 'src/app/helpers/animations/animations.helper';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit {
  public shouldShowFixeds = true;
  public shouldShowNav = true;

  constructor(private aclService: AclService, private active: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService, private router: Router) { }

  public listener(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof ActivationStart) {
        this.shouldShowFixeds = event.snapshot.routeConfig.path !== 'login';
        this.shouldShowNav = event.snapshot.routeConfig.path !== 'user';
      }
    });
  }

  public getHeight(): string {
    return `calc(100vh - ${this.shouldShowNav ? '110' : '55'}px)`
  }

  ngOnInit() {
    this.aclService.setAbilities(ROLES)
    this.listener();
    this.categoryService.get();
    this.productService.get();
    this.shouldShowFixeds = !(this.active.snapshot.firstChild.url[0].path === 'login');
  }

}
