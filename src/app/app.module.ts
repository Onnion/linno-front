import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, LocationStrategy, APP_BASE_HREF, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './mat.module';
import { MAT_DATE_LOCALE } from '@angular/material';
import { NotifierModule } from 'angular-notifier';
import { RouterModule } from '@angular/router';
import { AclService } from 'ng2-acl';
import { AclRedirection, AclResolver } from './app.resolve';
import { SharedModule } from './modules/shared/shared.module';
import { LayoutsModule } from './modules/layouts/layouts.module';
import { notifierDefaultOptions } from './helpers/consts/consts.helpers';
import { HandlerErrorHelpers } from './helpers/handler-error/handler-error.helper';
import { TokenInterceptor } from './helpers/interceptor/interceptor.helper';
import { FormBuilderValidators } from './validators';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    NotifierModule.withConfig(notifierDefaultOptions),
  ],
  declarations: [AppComponent],
  providers: [
    FormBuilderValidators,
    AclService,
    AclResolver,
    AclRedirection,
    HandlerErrorHelpers,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
