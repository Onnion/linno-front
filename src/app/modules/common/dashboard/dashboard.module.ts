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
import { CurrencyPipeModule } from 'src/app/helpers/pipes/currency/currency.pipe.module';
import { MatPaginatorIntl } from '@angular/material';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';

export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  itemsPerPageLabel = 'Leads por página';
  nextPageLabel = 'Pŕoxima página';
  previousPageLabel = 'Página Anterior';
}

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCardComponent,
    LeadListComponent,
    ProblemBulletComponent,
    BudgetComponent,
    BudgetDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoadingModule,
    PhonePipeModule,
    CurrencyPipeModule
  ],
  exports: [DashboardComponent],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
})
export class DashboardModule { }