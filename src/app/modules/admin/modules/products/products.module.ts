import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { LoadingModule } from 'src/app/modules/common/components/loading/loading.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatButtonModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaskDirectiveModule } from 'src/app/modules/common/directives/mask/mask.directive.module';
import { TokenInterceptor } from 'src/app/modules/common/interceptor/interceptor';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductService } from 'src/app/modules/common/services/product/product.service';
import { ProductsWrapperComponent } from './components/products-wrapper/products-wrapper.component';
import { StoreService } from 'src/app/modules/app/store/store.service';
import { FactoriesrService } from 'src/app/modules/common/services/factories/factories.service';

@NgModule({
  declarations: [ProductsListComponent, ProductsCreateComponent, ProductsWrapperComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LoadingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientModule,
    MaskDirectiveModule,
  ],
  providers: [
    ProductService,
    StoreService,
    FactoriesrService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ]
})
export class ProductsModule { }
