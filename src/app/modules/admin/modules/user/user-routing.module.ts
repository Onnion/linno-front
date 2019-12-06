import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreatComponent } from './components/user-creat/user-creat.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: UserListComponent },
      { path: 'registrar', component: UserCreatComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
