import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './views/app/app.component';
import { HomeComponent } from './views/home/home.component';
import { FabricatorsComponent } from './views/fabricators/fabricators.component';
import { CartComponent } from './views/cart/cart.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './app.guard';
import { AclResolver } from './app.resolve';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      {
        path: 'app', canActivate: [AuthGuardService], resolve: { route: AclResolver, state: AclResolver }, children: [
          { path: '', component: HomeComponent, },
          { path: 'producer', component: FabricatorsComponent, data: { get: 'product', key: 'name', store: true } },
          { path: 'cart', component: CartComponent, data: { get: 'cart', key: 'name', store: true } }
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
