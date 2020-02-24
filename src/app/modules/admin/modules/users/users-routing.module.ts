import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersWrapperComponent } from './components/users-wrapper/users-wrapper.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';

const routes: Routes = [
  {
    path: '', component: UsersWrapperComponent, children: [
      {
        path: '', component: UsersListComponent
      },
      {
        path: 'adicionar', component: UsersCreateComponent
      },
      // {
      //   path: 'editar/:dealership_id', component: DealershipsEditComponent
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
