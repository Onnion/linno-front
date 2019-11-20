import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardSelectBrandComponent } from './dashboard-card-select-brand.component';

describe('DashboardCardSelectBrandComponent', () => {
  let component: DashboardCardSelectBrandComponent;
  let fixture: ComponentFixture<DashboardCardSelectBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardSelectBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardSelectBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
