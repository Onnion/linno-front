import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AuthLayoutComponent} from './modules/layouts/auth/auth-layout.component';
import {AdminLayoutComponent} from './modules/layouts/admin/admin-layout.component';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {AclResolver} from './app.resolve';

const routes: Routes = [
    {
        path: 'login',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/auth/auth.module#AuthModule'
            }
        ]
    },

    {
        path: 'dashboard',
        component: AdminLayoutComponent,
        canActivate: [AuthGuardService],
        resolve: { route: AclResolver, state: AclResolver },
        children: [
            {
                path: '',
                loadChildren: './modules/intern/intern.module#InternModule'
            },
        ]
    },

    {
        path: 'cliente',
        component: AdminLayoutComponent,
        canActivate: [AuthGuardService],
        resolve: { route: AclResolver, state: AclResolver },
        children: [
            {
                path: '',
                loadChildren: './modules/clients/clients.module#ClientsModule'
            },
        ]
    },

    {path: '**', redirectTo: 'dashboard'},

    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

];


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
