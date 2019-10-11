import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { ProductService } from '../../services/product/product.service';
import { routerTransition, slide } from '../../animations/animations';
import { Router, RouterEvent, ActivationStart } from '@angular/router';
import { ROLES } from 'src/app/app.roles';
import { AclService } from 'ng2-acl';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition, slide]
})
export class AppComponent implements OnInit {
  public shouldShowNav = false;

  constructor(private aclService: AclService, private productService: ProductService, private categoryService: CategoryService, private router: Router) { }

  public listener(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof ActivationStart) {
        this.shouldShowNav = event.snapshot.routeConfig.path !== 'login';
      }
    });
  }

  ngOnInit() {
    this.aclService.setAbilities(ROLES)
    this.listener();
    this.categoryService.get();
    this.productService.get();
  }

}
