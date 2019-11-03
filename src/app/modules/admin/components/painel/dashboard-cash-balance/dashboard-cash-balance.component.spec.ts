import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCashBalanceComponent } from './dashboard-cash-balance.component';

describe('DashboardCashBalanceComponent', () => {
  let component: DashboardCashBalanceComponent;
  let fixture: ComponentFixture<DashboardCashBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCashBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCashBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
