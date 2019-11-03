import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NichesListComponent } from './niches-list.component';

describe('NichesListComponent', () => {
  let component: NichesListComponent;
  let fixture: ComponentFixture<NichesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NichesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NichesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
