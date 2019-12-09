import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersWrapperComponent } from './components/users-wrapper/users-wrapper.component';
import { LoadingModule } from 'src/app/modules/common/components/loading/loading.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaskDirectiveModule } from 'src/app/modules/common/directives/mask/mask.directive.module';
import { CpfPipeModule } from 'src/app/modules/common/pipes/cpf/cpf.pipe.module';
import { UsersService } from 'src/app/modules/common/services/users/users.service';
import { TokenInterceptor } from 'src/app/modules/common/interceptor/interceptor';

@NgModule({
  declarations: [UsersCreateComponent, UsersListComponent, UsersWrapperComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LoadingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientModule,
    MaskDirectiveModule,
    CpfPipeModule
  ],
  providers: [
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ]
})
export class UsersModule { }
