import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'login' },
      // { path: 'login', loadChildren: './modules/auth/auth.module#AuthModule' },
      { path: 'usuarios', loadChildren: './modules/user/user.module#AdminUserModule' },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
