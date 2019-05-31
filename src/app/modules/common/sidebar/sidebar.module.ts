import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { MaterialModule } from 'src/app/mat.module';
import { LeadsFilterTimesModule } from '../leads-filter-times/leads-filter-times.module';
import { LeadsFilterAccountModule } from '../leads-filter-account/leads-filter-account.module';

@NgModule({
    imports: [ RouterModule, CommonModule, MaterialModule, LeadsFilterTimesModule, LeadsFilterAccountModule],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
