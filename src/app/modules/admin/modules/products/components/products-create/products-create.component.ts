import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/modules/common/services/users/users.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/modules/common/services/product/product.service';
import { zip } from 'rxjs';
import { BrandService } from 'src/app/modules/common/services/brands/brands.service';
import { FactoriesrService } from 'src/app/modules/common/services/factories/factories.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  public form: FormGroup;
  public factories: any[];
  public brands: any[];
  public categories: any[];
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private brandsService: BrandService,
    private factoriesService: FactoriesrService,
    private router: Router) {

  }

  private initListsControlOptions(): void {
    zip(
      this.productService.getProductCategories(),
      this.brandsService.getData({ limit: 999999 }),
      this.factoriesService.getData({ limit: 999999 })
    ).subscribe(
      (results: any[]) => {
        this.categories = results[0];
        this.brands = results[1];
        this.factories = results[2];
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  private initFormControls(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      product_category_id: ['', Validators.required],
      brand_id: ['', Validators.required],
      factory_id: ['', Validators.required]
    });

    this.initListsControlOptions();
  }

  public send(): void {
    if (this.form.valid) {
      this.loading = true;
      this.productService.save(this.form.value).subscribe(
        () => {
          this.loading = false;
          this.router.navigate(['/admin/painel/produtos']);
        },
        error => console.log(error)
      );
    }
  }

  ngOnInit() {
    this.initFormControls();
  }
}
