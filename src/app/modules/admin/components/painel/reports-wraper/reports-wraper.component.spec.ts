import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsWraperComponent } from './reports-wraper.component';

describe('ReportsWraperComponent', () => {
  let component: ReportsWraperComponent;
  let fixture: ComponentFixture<ReportsWraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsWraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
