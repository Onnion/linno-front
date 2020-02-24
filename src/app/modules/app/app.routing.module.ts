import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './views/app/app.component';
import { HomeComponent } from './views/home/home.component';
import { FabricatorsComponent } from './views/fabricators/fabricators.component';
import { CartComponent } from './views/cart/cart.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './app.guard';
import { AclResolver } from '../../app.resolve';
import { QuotationGroupsComponent } from './views/quotation-groups/quotation-groups.component';
import { UserComponent } from './views/user/user.component';
import { QuotationsComponent } from './views/quotations/quotations.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'user', component: UserComponent },
      {
        path: 'app', canActivate: [AuthGuardService], resolve: { route: AclResolver, state: AclResolver }, children: [
          { path: '', component: HomeComponent, },
          { path: 'producer', component: FabricatorsComponent, data: { get: 'product', key: 'name', store: true } },
          { path: 'cart', component: CartComponent, data: { get: 'cart', key: 'name', store: true } },
          { path: 'quotation-groups', component: QuotationGroupsComponent, data: { get: 'orders', key: 'orders', store: true } },
          { path: 'quotation-groups/quotations/:quotation_groups_id', component: QuotationsComponent }
        ]
      },
      {
        path: 'fabricator', canActivate: [AuthGuardService], resolve: { route: AclResolver, state: AclResolver }, children: [
          { path: '', component: HomeComponent, },
          { path: 'producer', component: FabricatorsComponent, data: { get: 'product', key: 'name', store: true } },
          { path: 'cart', component: CartComponent, data: { get: 'cart', key: 'name', store: true } }
        ]
      },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
