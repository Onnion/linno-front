import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../common/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.setInStoreProductCategories();
  }

}
