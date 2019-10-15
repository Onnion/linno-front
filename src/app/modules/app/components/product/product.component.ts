import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() pure: boolean = false;
  @Input() index: number;

  public form: FormGroup;

  constructor(private store: StoreService, private router: Router, private fb: FormBuilder) { }

  private initFormControl(): void {
    this.form = this.fb.group({
      amount: [1, [Validators.required, Validators.min(1)]]
    });
  }

  public view($event) {

    console.log($event);
    $event.preventDefault();
    console.log(this.form);

  }

  public selectProduct(): void {
    this.store.product = this.product;
    this.router.navigate([`/app/app/producer/`]);
  }

  ngOnInit() {
    this.initFormControl();
  }

}