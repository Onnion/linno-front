import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesProductsComponent } from './sales-products.component';

describe('SalesProductsComponent', () => {
  let component: SalesProductsComponent;
  let fixture: ComponentFixture<SalesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
