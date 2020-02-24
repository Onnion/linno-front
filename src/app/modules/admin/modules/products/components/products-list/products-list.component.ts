import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/common/services/product/product.service';
import { ListComponent } from 'src/app/modules/common/interfaces/list/list-components.helpers';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent extends ListComponent implements OnInit {
  constructor(private productService: ProductService) {
    super();
  }

  private initConfigs(): void {
    this.service = this.productService;
    this.methodLoad = 'getData';
  }

  ngOnInit() {
    this.initConfigs();
    this.loadData();
  }

}
