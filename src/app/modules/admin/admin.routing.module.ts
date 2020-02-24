import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AclResolver } from 'src/app/app.resolve';
import { AuthGuardService } from './app.guard';

const routes: Routes = [
  { path: '', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'painel', canActivate: [AuthGuardService], resolve: { route: AclResolver, state: AclResolver }, loadChildren: './modules/admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
