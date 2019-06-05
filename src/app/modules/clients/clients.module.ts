import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutes } from './clients.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { LoadingModule } from '../common/loading/loading.module';
import { LeadsFilterTimesModule } from '../common/leads-filter-times/leads-filter-times.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { CampaignsListComponent } from './components/campaign/campaigns-list/campaigns-list.component';
import { Ng2OdometerModule } from 'ng2-odometer';
import { PhonePipeModule } from 'src/app/helpers/pipes/phone/phone.pipe.module';
import { BudgetModule } from '../common/budget/budget.module';

@NgModule({
    declarations: [ 
        DashboardComponent,
        DashboardCardComponent,
        CampaignsListComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule, 
        FormsModule,
        LoadingModule,
        ChartsModule,
        PhonePipeModule,
        Ng2OdometerModule,
        ReactiveFormsModule,
        LeadsFilterTimesModule,
        BudgetModule,
        RouterModule.forChild(ClientsRoutes),
    ]
})
export class ClientsModule {
}
