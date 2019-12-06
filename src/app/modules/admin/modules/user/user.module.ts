import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserCreatComponent } from './components/user-creat/user-creat.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/modules/common/loading/loading.module';
import { MatIconModule, MatInputModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { CpfPipeModule } from 'src/app/helpers/pipes/cpf/cpf.pipe.module';

@NgModule({
  declarations: [
    UserCreatComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    CpfPipeModule,
    LoadingModule
  ]
})
export class AdminUserModule { }
