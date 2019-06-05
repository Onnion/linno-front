import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthLayoutComponent } from './modules/layouts/auth/auth-layout.component';
import { AdminLayoutComponent } from './modules/layouts/admin/admin-layout.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AclResolver } from './app.resolve';

function isRoot(url: UrlSegment[]) {
    console.log(url);
    return url.length === 1 && url[0].path.endsWith('.html') ? ({ consumed: url }) : null;
}


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
        path: '',
        // matcher: isRoot,
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
