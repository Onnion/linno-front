import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutes } from './clients.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { LoadingModule } from '../common/loading/loading.module';
import { LeadsFilterTimesModule } from '../common/leads-filter-times/leads-filter-times.module';
import { PhonePipeModule } from 'src/app/helpers/pipes/phone/phone.pipe.module';
import { DashboardModule } from '../common/dashboard/dashboard.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule, 
        FormsModule,
        LoadingModule,
        ChartsModule,
        PhonePipeModule,
        ReactiveFormsModule,
        LeadsFilterTimesModule,
        DashboardModule,
        RouterModule.forChild(ClientsRoutes),
    ]
})
export class ClientsModule {
}
