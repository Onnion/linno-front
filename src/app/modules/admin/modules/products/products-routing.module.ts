import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsWrapperComponent } from './components/products-wrapper/products-wrapper.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';

const routes: Routes = [
  {
    path: '', component: ProductsWrapperComponent, children: [
      {
        path: '', component: ProductsListComponent
      },
      {
        path: 'adicionar', component: ProductsCreateComponent
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
export class ProductsRoutingModule { }
