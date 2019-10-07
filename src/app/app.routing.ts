import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthLayoutComponent } from './modules/layouts/auth/auth-layout.component';
import { AdminLayoutComponent } from './modules/layouts/admin/admin-layout.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AclResolver } from './app.resolve';
import { RegisterLayoutComponent } from './modules/layouts/register/register-layout.component';

const routes: Routes = [
    {
        path: 'cadastro',
        component: RegisterLayoutComponent,
    },

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
        path: '',
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
        path: 'revenda',
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

    { path: '**', redirectTo: 'login' },

];


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
