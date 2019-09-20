import { Routes } from '@angular/router';
import { CampaignWrapperComponent } from './components/campaign/campaign-wrapper/campaign-wrapper.component';
import { CampaignFormComponent } from './components/campaign/campaign-form/campaign-form.component';
import { CampaignFormEditComponent } from './components/campaign/campaign-form-edit/campaign-form-edit.component';
import { SuportComponent } from '../common/suport/suport.component';
import { DashboardComponent } from '../common/dashboard/dashboard/dashboard.component';

export const InterRoutes: Routes = [
    {
        path: '',
        component: CampaignWrapperComponent,
        children: [
            {
                path: 'painel',
                component: DashboardComponent,
            },
            {
                path: 'cadastro',
                component: CampaignFormComponent,
                data: { type: 'register' }
            },
            {
                path: 'ajuste​',
                component: CampaignFormEditComponent,
                data: { type: 'edit' }
            },
            {
                path: 'suporte',
                component: SuportComponent,
            },
            { path: '', redirectTo: 'ajuste​' },

        ]
    },
];