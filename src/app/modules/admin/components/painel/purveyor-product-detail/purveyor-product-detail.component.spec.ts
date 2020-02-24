import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurveyorProductDetailComponent } from './purveyor-product-detail.component';

describe('PurveyorProductDetailComponent', () => {
  let component: PurveyorProductDetailComponent;
  let fixture: ComponentFixture<PurveyorProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurveyorProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurveyorProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
