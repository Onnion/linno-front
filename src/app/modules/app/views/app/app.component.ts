import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { ProductService } from '../../services/product/product.service';
import { routerTransition } from '../../animations/animations';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.get();
    this.productService.get();
  }

}
