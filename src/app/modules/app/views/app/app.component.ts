import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  private checkMobile() {
    
  }

  ngOnInit() {
    this.categoryService.get();
    this.productService.get();
  }

}
