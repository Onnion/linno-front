import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelWraperComponent } from './painel-wraper.component';

describe('PainelWraperComponent', () => {
  let component: PainelWraperComponent;
  let fixture: ComponentFixture<PainelWraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelWraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
