import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuportComponent } from './suport.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/mat.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [SuportComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [SuportComponent]
})
export class SuportModule { }
