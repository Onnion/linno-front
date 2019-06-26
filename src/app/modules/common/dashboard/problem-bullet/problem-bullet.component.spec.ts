import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemBulletComponent } from './problem-bullet.component';

describe('ProblemBulletComponent', () => {
  let component: ProblemBulletComponent;
  let fixture: ComponentFixture<ProblemBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemBulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
