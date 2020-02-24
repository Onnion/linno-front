import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './mat.module';
import { MAT_DATE_LOCALE } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AclService } from 'ng2-acl';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HandlerErrorHelpers } from './modules/common/interfaces/handle-error/handle-error';
import { TokenInterceptor } from './modules/common/interceptor/interceptor';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    DeviceDetectorModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [
    AclService,
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
