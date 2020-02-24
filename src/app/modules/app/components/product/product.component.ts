import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() changeAmount: EventEmitter<number> = new EventEmitter<number>();

  public form: FormGroup;

  constructor(private store: StoreService, private router: Router, private fb: FormBuilder) { }

  private initFormControl(): void {
    this.form = this.fb.group({
      amount: [1, [Validators.required, Validators.min(1)]]
      // price: [0, [Validators.required]]
    });
  }

  public selectProduct(): void {
    window.navigator.vibrate(100);
    this.store.product = this.product;
    this.router.navigate([`/app/app/producer/`]);
  }

  ngOnInit() {
    this.initFormControl();

    this.form.valueChanges.subscribe(values => {
      this.changeAmount.emit(values.amount);
    })
  }

}
