import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PainelWraperComponent } from './painel/painel-wraper/painel-wraper.component';
import { DashboardComponent } from './painel/dashboard/dashboard.component';
import { SidebarComponent } from './painel/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './painel/profile/profile.component';
import { DashboardCardComponent } from './painel/dashboard-card/dashboard-card.component';
import { LoadingComponent } from './loading/loading.component';
import { SalesProductsComponent } from './painel/sales-products/sales-products.component';
import { NicheComponent } from './painel/niche/niche.component';
import { NichesListComponent } from './painel/niches-list/niches-list.component';
// import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

import {
  MatFormFieldModule,
  MatInputModule, MatIconModule,
  MatPaginatorModule, MatProgressSpinnerModule,
  MatDatepickerModule, MatSelectModule,
  MatAutocompleteModule, MatNativeDateModule, MatCardModule, MatProgressBarModule
} from '@angular/material';
import { NichesProductFormComponent } from './painel/niches-product-form/niches-product-form.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDirective } from '../../../helpers/directives/modal/modal.directive';
import { ReportsComponent } from './painel/reports/reports.component';
import { CpfPipe } from '../../../helpers/pipes/cpf/cpf.pipe';
import { ReportsWraperComponent } from './painel/reports-wraper/reports-wraper.component';
import { ReportsListComponent } from './painel/reports-list/reports-list.component';
import { UploadService } from '../services/upload/upload.service';
import { PurveyorFormComponent } from './painel/purveyor/purveyor-form/purveyor-form.component';
import { PurveyorListComponent } from './painel/purveyor-list/purveyor-list.component';
import { PersonalFormComponent } from './painel/purveyor/personal-form/personal-form.component';
import { BrandFormComponent } from './painel/purveyor/brand-form/brand-form.component';
import { ContractFormComponent } from './painel/purveyor/contract-form/contract-form.component';
import { InvoiceDetailComponent } from './painel/invoice-detail/invoice-detail.component';
import { DashboardCashBalanceComponent } from './painel/dashboard-cash-balance/dashboard-cash-balance.component';
import { DashboardCardSelectBrandComponent } from './painel/dashboard-card-select-brand/dashboard-card-select-brand.component';
import { PurveyorNichesListComponent } from './painel/purveyor-niches-list/purveyor-niches-list.component';
import { PurveyorProductDetailComponent } from './painel/purveyor-product-detail/purveyor-product-detail.component';
import { CurrencyPipeModule } from 'src/app/helpers/pipes/currency/currency.pipe.module';


@NgModule({
  declarations: [
    LoginComponent,
    PainelWraperComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    DashboardCardComponent,
    CpfPipe,
    LoadingComponent,
    SalesProductsComponent,
    NicheComponent,
    NichesListComponent,
    NichesProductFormComponent,
    ConfirmComponent,
    ModalDirective,
    ReportsComponent,
    ReportsWraperComponent,
    ReportsListComponent,
    PurveyorListComponent,
    PurveyorFormComponent,
    PersonalFormComponent,
    BrandFormComponent,
    ContractFormComponent,
    InvoiceDetailComponent,
    DashboardCashBalanceComponent,
    DashboardCardSelectBrandComponent,
    PurveyorNichesListComponent,
    PurveyorProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatCardModule,
    MatProgressBarModule,
    CurrencyPipeModule
    // LazyLoadImagesModule
    // PipesModule
  ],
  providers: [UploadService]
})
export class ComponentsModule { }
