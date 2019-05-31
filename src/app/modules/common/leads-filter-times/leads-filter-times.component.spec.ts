import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsFilterTimesComponent } from './leads-filter-times.component';

describe('LeadsFilterTimesComponent', () => {
    let component: LeadsFilterTimesComponent;
    let fixture: ComponentFixture<LeadsFilterTimesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LeadsFilterTimesComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeadsFilterTimesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
