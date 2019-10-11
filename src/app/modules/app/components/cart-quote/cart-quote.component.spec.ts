import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartQuoteComponent } from './cart-quote.component';

describe('CartQuoteComponent', () => {
  let component: CartQuoteComponent;
  let fixture: ComponentFixture<CartQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
