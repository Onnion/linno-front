import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
    { path: 'app', loadChildren: './modules/app/app.module#AppAppModule' },
    { path: 'admin', loadChildren: './modules/admin/app.module#AppAdminModule' },
    { path: '**', redirectTo: 'app' },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: 'top'
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
