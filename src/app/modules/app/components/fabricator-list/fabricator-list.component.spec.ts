import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricatorListComponent } from './fabricator-list.component';

describe('FabricatorListComponent', () => {
  let component: FabricatorListComponent;
  let fixture: ComponentFixture<FabricatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
