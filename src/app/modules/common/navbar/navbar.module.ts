import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material';
import { LeadsFilterTimesModule } from '../leads-filter-times/leads-filter-times.module';
import { LeadsFilterAccountModule } from '../leads-filter-account/leads-filter-account.module';
@NgModule({
    imports: [ RouterModule, CommonModule, MatButtonModule, LeadsFilterAccountModule, LeadsFilterTimesModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {}
