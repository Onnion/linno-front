import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignFormComponent } from './components/campaign/campaign-form/campaign-form.component';
import { RouterModule } from '@angular/router';
import { InterRoutes } from './intern.routing';
import { MaterialModule } from '../../mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignWrapperComponent } from './components/campaign/campaign-wrapper/campaign-wrapper.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { CampaignFormEditComponent } from './components/campaign/campaign-form-edit/campaign-form-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CampaignsListComponent } from './components/campaign/campaigns-list/campaigns-list.component';
import { MaskDirective } from 'src/app/helpers/directives/mask/mask.directive';
import { LeadMouraService } from './services/lead-moura/lead-moura.service';
import { LoadingModule } from '../common/loading/loading.module';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
// import { Ng2OdometerModule } from 'ng2-odometer';
import { PhonePipeModule } from 'src/app/helpers/pipes/phone/phone.pipe.module';
import { BudgetModule } from '../common/budget/budget.module';
import { ProblemBulletModule } from '../common/problem-bullet/problem-bullet.module';

@NgModule({
  declarations: [
    CampaignFormComponent,
    CampaignWrapperComponent,
    CampaignFormEditComponent,
    DashboardComponent,
    CampaignsListComponent,
    MaskDirective,
    DashboardCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    LoadingModule,
    PhonePipeModule,
    ReactiveFormsModule,
    BudgetModule,
    ProblemBulletModule,
    // Ng2OdometerModule,
    RouterModule.forChild(InterRoutes),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    LeadMouraService
  ]
})
export class InternModule { }
