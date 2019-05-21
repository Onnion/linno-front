import {Routes} from '@angular/router';
import {CampaignWrapperComponent} from './components/campaign/campaign-wrapper/campaign-wrapper.component';
import {CampaignFormComponent} from './components/campaign/campaign-form/campaign-form.component';
import { CampaignFormEditComponent } from './components/campaign/campaign-form-edit/campaign-form-edit.component';

export const InterRoutes: Routes = [
    {
        path: '',
        component: CampaignWrapperComponent,
        children: [
            {
                path: 'revenda/adicionar',
                component: CampaignFormComponent,
                data: {type: 'register'}
            },
            {
                path: 'revenda/editar',
                component: CampaignFormEditComponent,
                data: {type: 'edit'}
            }
        ]
    },
];
