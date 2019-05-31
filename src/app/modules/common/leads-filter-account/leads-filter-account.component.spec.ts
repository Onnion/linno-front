import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsFilterAccountComponent } from './leads-filter-account.component';

describe('LeadsFilterAccountComponent', () => {
  let component: LeadsFilterAccountComponent;
  let fixture: ComponentFixture<LeadsFilterAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsFilterAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsFilterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
