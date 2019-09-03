import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './views/admin/admin.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent
  ],
  imports: [
    AdminRoutingModule,
    HttpClientModule
  ],
})
export class AdminModule { }
