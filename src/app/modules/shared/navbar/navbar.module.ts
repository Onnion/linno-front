import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material';
import { LeadsFilterModule } from '../leads-filter/leads-filter.module';
import { LeadsFilterTimesModule } from '../leads-filter-times/leads-filter-times.module';
@NgModule({
    imports: [ RouterModule, CommonModule, MatButtonModule, LeadsFilterModule, LeadsFilterTimesModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {}
