import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin/admin-layout.component';
import {AuthLayoutComponent} from './auth/auth-layout.component';
import {ClientLayoutComponent} from './client/client-layout.component';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {SidebarModule} from '../shared/sidebar/sidebar.module';
import {FooterModule} from '../shared/footer/footer.module';
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
        SidebarModule,
        FooterModule
    ]
})
export class LayoutsModule {
}
