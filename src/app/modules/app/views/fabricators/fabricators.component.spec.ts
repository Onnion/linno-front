import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricatorsComponent } from './fabricators.component';

describe('FabricatorsComponent', () => {
  let component: FabricatorsComponent;
  let fixture: ComponentFixture<FabricatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
