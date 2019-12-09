import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../common/services/product/product.service';
import { CategoryService } from '../../../common/services/category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    // this.categoryService.get();
    this.productService.setInStoreProductCategories();
  }

}
