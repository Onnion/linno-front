import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin.routing.module';
import { AclService } from 'ng2-acl';
import { MAT_DATE_LOCALE } from '@angular/material';
import { CommonModule } from '@angular/common';
import { AclResolver, AclRedirection } from 'src/app/app.resolve';
import { AuthService } from '../common/services/auth/auth.service';
import { LoadingModule } from '../common/components/loading/loading.module';
import { CurrencyPipeModule } from '../common/pipes/currency/currency.pipe.module';
import { FormBuilderValidators } from '../common/validators/form-builder/form-builder.validators';
import { AuthGuardService } from './app.guard';
import { QuotationService } from '../common/services/quotation/quotation.service';
import { StoreService } from '../app/store/store.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    AdminRoutingModule,
    CurrencyPipeModule
  ],
  providers: [
    AclService,
    AclResolver,
    AuthGuardService,
    FormBuilderValidators,
    AuthService,
    StoreService,
    QuotationService,
    AclResolver,
    AclRedirection,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppAdminModule { }
