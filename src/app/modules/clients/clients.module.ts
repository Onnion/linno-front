import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutes } from './clients.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { LoadingModule } from '../shared/loading/loading.module';
import { LeadsFilterTimesModule } from '../shared/leads-filter-times/leads-filter-times.module';
import { CampaignFormComponent } from './components/campaign/campaign-form/campaign-form.component';
import { CampaignWrapperComponent } from './components/campaign/campaign-wrapper/campaign-wrapper.component';
import { CampaignFormEditComponent } from './components/campaign/campaign-form-edit/campaign-form-edit.component';
import { DashboardModule } from './components/dashboard/dashboard.module';

@NgModule({
    declarations: [
        CampaignFormComponent,
        CampaignWrapperComponent,
        CampaignFormEditComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        LoadingModule,
        ChartsModule,
        DashboardModule,
        ReactiveFormsModule,
        LeadsFilterTimesModule,
        RouterModule.forChild(ClientsRoutes),
    ]
})
export class ClientsModule {
}
