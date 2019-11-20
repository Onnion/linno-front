import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AdminRoutingModule } from './admin.routing.module';
import { AclService } from 'ng2-acl';
import { SettingsService } from './services/settings.service';
import { SellersService } from './services/sellers/sellers.service';
import { MAT_DATE_LOCALE } from '@angular/material';
import { HandlerErrorHelpers } from 'src/app/helpers/handler-error/handler-error.helper';
import { FormBuilderValidators } from 'src/app/helpers/validators';
import { CurrencyPipeModule } from 'src/app/helpers/pipes/currency/currency.pipe.module';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '../common/loading/loading.module';
import { AclResolver } from 'src/app/app.resolve';
import { AuthGuardService } from '../app/app.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    ComponentsModule,
    AdminRoutingModule,
    CurrencyPipeModule
  ],
  providers: [
    AclService,
    AclResolver,
    AuthGuardService,
    HandlerErrorHelpers,
    SettingsService,
    SellersService,
    FormBuilderValidators,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppAdminModule { }
