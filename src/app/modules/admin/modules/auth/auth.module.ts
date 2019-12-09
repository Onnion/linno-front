import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth.routing.module';
import { MatInputModule, MatIconModule } from '@angular/material';
import { LoadingModule } from '../../../common/components/loading/loading.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        LoadingModule,
        MatInputModule,
        MatIconModule,
        HttpClientModule
    ],
    declarations: [
        LoginComponent,
    ]
})

export class AuthModule {
}
