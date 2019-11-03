import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { transformCurrency } from 'src/app/app.utils';
import * as _ from 'lodash';
import { NotifyService } from '../../../services/notify/notify.service';
import { ProductsService } from '../../../services/entites/products/products.service';

@Component({
  selector: 'app-sales-products',
  templateUrl: './sales-products.component.html',
  styleUrls: ['./sales-products.component.css']
})
export class SalesProductsComponent implements OnInit {
  @Input() active: boolean;
  @Output() submitProduct: EventEmitter<any> = new EventEmitter<any>();
  @Output() doneProducts: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  public productsFiltred: Observable<any>;
  public status_form = { loading: false, done: false, error: false, products: false };
  private productSelected = null;

  constructor(private notify: NotifyService, private fb: FormBuilder, private producsService: ProductsService) { }


  /**
   *
   * @param erros (boolean)
   */
  private updateValidity(erros: boolean): void {
    _.forEach(this.form.controls, (control: FormControl) => {
      erros ? control.setErrors(null) : control.updateValueAndValidity();
    });
  }


  public submit(): void {
    this.updateValidity(false);
    if (this.form.valid) {
      const controls = this.form.controls;

      const totalPrice = transformCurrency(controls.amount.value) * transformCurrency(this.productSelected.price);

      if (transformCurrency(controls.discount.value) <= totalPrice) {
        this.submitProduct.emit(this.createProductData());
        this.status_form.products = true;
        this.form.reset();
        this.updateValidity(true);
        this.productSelected = null;
      } else {
        this.notify.show('warning', `Desconto superior ao valor do produto: R$ ${transformCurrency(this.productSelected.price)}`);
      }
    }
  }


  public conclusionProducts(): void {
    if (this.status_form.products) {
      this.status_form.done = true;
      this.doneProducts.emit(true);
    }

  }


  private createProductData(): any {
    const controls = this.form.controls;

    return {
      product: this.productSelected,
      amount: controls.amount.value,
      discount: controls.discount.value
    };

  }


  private initFormControlls(): void {
    this.form = this.fb.group({
      product: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      discount: [0, Validators.required],
    });

  }


  public selectProduct(product: any) {
    this.productSelected = product;
  }


  /**
   * retorna uma lsita de produtos filtrados a partir do texto digitado
   *
   */
  public filterProducts(): any {
    const controls = this.form.controls;
    this.producsService.getFilter(controls.product.value).subscribe(
      (products) => {
        this.productsFiltred = products.data;
      }
    );

  }


  /**
   * Verifica se o valor digitado é igual a algum campo de product
   *
   * @param airport (any)
   * @param filter (string)
   */
  public hasFilter(product: any, filter: string): boolean {
    const _filter = filter.toLowerCase();
    return (product.name.toLowerCase().includes(_filter));

  }


  ngOnInit(): void {
    this.initFormControlls();

  }

}
