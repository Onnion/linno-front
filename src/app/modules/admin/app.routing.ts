import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PainelWraperComponent } from './components/painel/painel-wraper/painel-wraper.component';
import { DashboardComponent } from './components/painel/dashboard/dashboard.component';
import { ProfileComponent } from './components/painel/profile/profile.component';
import { NichesListComponent } from './components/painel/niches-list/niches-list.component';
import { ReportsComponent } from './components/painel/reports/reports.component';
import { ReportsWraperComponent } from './components/painel/reports-wraper/reports-wraper.component';
import { ReportsListComponent } from './components/painel/reports-list/reports-list.component';
import { PurveyorListComponent } from './components/painel/purveyor-list/purveyor-list.component';
import { PurveyorFormComponent } from './components/painel/purveyor/purveyor-form/purveyor-form.component';
import { InvoiceDetailComponent } from './components/painel/invoice-detail/invoice-detail.component';
import { PurveyorNichesListComponent } from './components/painel/purveyor-niches-list/purveyor-niches-list.component';
import { AuthGuardService } from '../app/app.guard';
import { AclResolver } from '../app/app.resolve';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    // tslint:disable-next-line:max-line-length
    path: 'painel', component: PainelWraperComponent, canActivate: [AuthGuardService], resolve: { route: AclResolver, state: AclResolver }, children: [
      { path: '', component: DashboardComponent },
      { path: 'perfil', component: ProfileComponent },
      { path: 'fornecedores', component: PurveyorListComponent },
      { path: 'fornecedores/adicionar', component: PurveyorFormComponent , data: { mode: 'create' } },
      { path: 'fornecedores/editar/:id', component: PurveyorFormComponent, data: { mode: 'edit' }},
      { path: 'vendas/detalhamento/:id', component: InvoiceDetailComponent },
      { path: 'espacos', component: NichesListComponent },
      {
        path: 'relatorios', component: ReportsWraperComponent, children: [
          { path: '', component: ReportsComponent },
          { path: ':type', component: ReportsListComponent }
        ]
      },

    ]
  },

  // tslint:disable-next-line:max-line-length
  { path: 'fornecedor', component: PainelWraperComponent, canActivate: [AuthGuardService], resolve: { route: AclResolver, state: AclResolver }, children: [
      { path: '', component: DashboardComponent },
      { path: 'perfil', component: ProfileComponent },
      { path: 'espacos', component: PurveyorNichesListComponent },
    ]
  },

  { path: '**', redirectTo: 'login' },

  { path: '', redirectTo: 'painel', pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
