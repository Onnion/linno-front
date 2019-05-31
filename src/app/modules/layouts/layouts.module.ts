import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin/admin-layout.component';
import {AuthLayoutComponent} from './auth/auth-layout.component';
import {ClientLayoutComponent} from './client/client-layout.component';
import {NavbarModule} from '../common/navbar/navbar.module';
import {SidebarModule} from '../common/sidebar/sidebar.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        AuthLayoutComponent,
        ClientLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NavbarModule,
        SidebarModule
    ]
})
export class LayoutsModule {
}
