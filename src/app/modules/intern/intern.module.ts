import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignFormComponent } from './components/campaign/campaign-form/campaign-form.component';
import { RouterModule } from '@angular/router';
import { InterRoutes } from './intern.routing';
import { MaterialModule } from '../../mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignWrapperComponent } from './components/campaign/campaign-wrapper/campaign-wrapper.component';
import { LoadingModule } from '../shared/loading/loading.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { CampaignFormEditComponent } from './components/campaign/campaign-form-edit/campaign-form-edit.component';
@NgModule({
  declarations: [
    CampaignFormComponent,
    CampaignWrapperComponent,
    CampaignFormEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    LoadingModule,
    ReactiveFormsModule,
    RouterModule.forChild(InterRoutes),
    SweetAlert2Module.forRoot()

  ]
})
export class InternModule { }
