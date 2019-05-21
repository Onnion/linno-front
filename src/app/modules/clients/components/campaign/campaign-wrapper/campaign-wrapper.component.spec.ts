import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWrapperComponent } from './campaign-wrapper.component';

describe('CampaignWrapperComponent', () => {
  let component: CampaignWrapperComponent;
  let fixture: ComponentFixture<CampaignWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
