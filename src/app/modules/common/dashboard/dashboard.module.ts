import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { MaterialModule } from 'src/app/mat.module';
import { ProblemBulletComponent } from './problem-bullet/problem-bullet.component';
import { LoadingModule } from '../loading/loading.module';
import { BudgetComponent } from './budget/budget.component';
import { PhonePipeModule } from 'src/app/helpers/pipes/phone/phone.pipe.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCardComponent,
    LeadListComponent,
    ProblemBulletComponent,
    BudgetComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoadingModule,
    PhonePipeModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
