import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../../mat.module';
import { AuthRoutes } from './auth.routing';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRoutes),
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        LoadingModule
    ],
    declarations: [
        LoginComponent,
    ]
})

export class AuthModule {
}
