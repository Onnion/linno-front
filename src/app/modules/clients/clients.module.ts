import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutes } from './clients.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { LoadingModule } from '../shared/loading/loading.module';
import { LeadsFilterTimesModule } from '../shared/leads-filter-times/leads-filter-times.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [ DashboardComponent ],
    imports: [
        CommonModule,
        MaterialModule, 
        FormsModule,
        LoadingModule,
        ChartsModule,
        ReactiveFormsModule,
        LeadsFilterTimesModule,
        RouterModule.forChild(ClientsRoutes),
    ]
})
export class ClientsModule {
}
