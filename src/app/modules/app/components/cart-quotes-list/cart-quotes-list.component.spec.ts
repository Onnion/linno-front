import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartQuotesListComponent } from './cart-quotes-list.component';

describe('CartQuotesListComponent', () => {
  let component: CartQuotesListComponent;
  let fixture: ComponentFixture<CartQuotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartQuotesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartQuotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
