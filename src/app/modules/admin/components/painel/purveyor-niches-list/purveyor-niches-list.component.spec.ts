import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurveyorNichesListComponent } from './purveyor-niches-list.component';

describe('PurveyorNichesListComponent', () => {
  let component: PurveyorNichesListComponent;
  let fixture: ComponentFixture<PurveyorNichesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurveyorNichesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurveyorNichesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
