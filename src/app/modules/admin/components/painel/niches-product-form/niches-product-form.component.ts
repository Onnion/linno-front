import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/entites/products/products.service';
import { NotifyService } from '../../../services/notify/notify.service';
import { transformCurrency } from 'src/app/app.utils';

@Component({
  selector: 'app-niches-product-form',
  templateUrl: './niches-product-form.component.html',
  styleUrls: ['./niches-product-form.component.css']
})
export class NichesProductFormComponent implements OnInit {

  @Input() brandId: any;
  @Input() data: any;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() done: EventEmitter<any> = new EventEmitter<any>();

  public productForm: FormGroup;
  public status = { loading: false };
  // public brandId: any;

  constructor(
    private actived: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductsService,
    private notify: NotifyService,
    private router: Router) { }


  private createProductData() {
    return (
      {
        code: this.productForm.controls.code.value,
        description: this.productForm.controls.description.value,
        amount: this.productForm.controls.amount.value,
        price: transformCurrency(this.productForm.controls.price.value),
        brand_id: this.brandId
      }
    );
  }

  public saveProduct() {
    if (this.productForm.valid) {
      if (!this.status.loading) {
        this.status.loading = true;
        let data: any = this.createProductData();

        if (this.data) {
          data = {
            ...data,
            id: this.data.id
          };

        }

        this.productService[this.data ? 'update' : 'store'](data).subscribe(
          (product) => {
            this.notify.show('success', `Produto ${this.data ? 'atualizado' : 'cadastrado'} com sucesso`);
            this.done.emit(true);
          },
          (err) => {
            this.status.loading = false;
          }
        );

      }
    }
  }


  public cancel() {
    this.close.emit(true);
  }


  ngOnInit() {
    // this.brandId = this.actived.snapshot.params['id'];
    this.productForm = this.fb.group({
      code: [this.data ? this.data.code : '', [Validators.required]],
      description: [this.data ? this.data.description : '', [Validators.required]],
      amount: [
        {
          value: this.data ? this.data.amount : '1',
          disabled: this.data
        }, Validators.required],
      price: [this.data ? this.data.price : '', [Validators.required]],

    });
  }


}
