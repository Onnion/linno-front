import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminWrapperComponent } from './components/admin-wrapper/admin-wrapper.component';


const routes: Routes = [
  {
    path: '', component: AdminWrapperComponent, children: [
      {
        path: '', redirectTo: 'usuarios'
      },
      {
        path: 'usuarios', loadChildren: '../users/users.module#UsersModule'
      },
      {
        path: 'produtos', loadChildren: '../products/products.module#ProductsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
