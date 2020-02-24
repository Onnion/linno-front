import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
})
export class AuthRoutingModule {
}
