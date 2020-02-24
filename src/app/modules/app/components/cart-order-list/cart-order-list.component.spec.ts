import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderListComponent } from './cart-order-list.component';

describe('CartOrderListComponent', () => {
  let component: CartOrderListComponent;
  let fixture: ComponentFixture<CartOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartOrderListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
