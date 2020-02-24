import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AclService } from 'ng2-acl';
import { SettingsService } from './services/settings.service';
import { SellersService } from './services/sellers/sellers.service';
import { MAT_DATE_LOCALE } from '@angular/material';
import { HandlerErrorHelpers } from 'src/app/helpers/handler-error/handler-error.helper';
import { FormBuilderValidators } from 'src/app/helpers/validators';
import { CurrencyPipeModule } from 'src/app/helpers/pipes/currency/currency.pipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    CurrencyPipeModule
  ],
  providers: [
    AclService,
    HandlerErrorHelpers,
    SettingsService,
    SellersService,
    FormBuilderValidators,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppAdminModule { }
