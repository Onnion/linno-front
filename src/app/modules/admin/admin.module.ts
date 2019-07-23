import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResaleFormComponent } from './components/resale-form/resale-form.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ResaleService } from './services/resale.service';
import { LoadingModule } from '../common/loading/loading.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/mat.module';

@NgModule({
  declarations: [
    ResaleFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    SweetAlert2Module.forRoot(),
    LoadingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    ResaleService
  ]
})
export class AdminModule { }
