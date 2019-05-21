import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LoadingModule } from './loading/loading.module';
import { LeadsFilterTimesModule } from './leads-filter-times/leads-filter-times.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        SidebarModule,
        LoadingModule,
        LeadsFilterTimesModule
    ],
    declarations: []
})

export class SharedModule {
}
