import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NichesProductFormComponent } from './niches-product-form.component';

describe('NichesProductFormComponent', () => {
  let component: NichesProductFormComponent;
  let fixture: ComponentFixture<NichesProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NichesProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NichesProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
