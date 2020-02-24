import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './views/home/home.component';
import { AppComponent } from './views/app/app.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { StoreService } from './store/store.service';
import { ProductService } from '../common/services/product/product.service';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FabricatorsComponent } from './views/fabricators/fabricators.component';
import { FabricatorListComponent } from './components/fabricator-list/fabricator-list.component';
import { FabricatorComponent } from './components/fabricator/fabricator.component';
import { CartComponent } from './views/cart/cart.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../common/services/auth/auth.service';
import { AclService } from 'ng2-acl';
import { AclResolver, AclRedirection } from '../../app.resolve';
import { AuthGuardService } from './app.guard';
import { CartOrderListComponent } from './components/cart-order-list/cart-order-list.component';
import { CartOrderComponent } from './components/cart-order/cart-order.component';
import { QuotationService } from '../common/services/quotation/quotation.service';
import { MenuComponent } from './components/menu/menu.component';
import { QuotationGroupsComponent } from './views/quotation-groups/quotation-groups.component';
import { UserComponent } from './views/user/user.component';
import { QuotationsComponent } from './views/quotations/quotations.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { QuotationListComponent } from './components/quotation-list/quotation-list.component';
import { NgxCurrencyModule } from "ngx-currency";
import { LoadingModule } from '../common/components/loading/loading.module';
import { FactoriesrService } from '../common/services/factories/factories.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    CategoriesListComponent,
    ProductComponent,
    ProductListComponent,
    FabricatorsComponent,
    FabricatorListComponent,
    FabricatorComponent,
    CartComponent,
    HeaderBannerComponent,
    LoginComponent,
    CartOrderListComponent,
    CartOrderComponent,
    MenuComponent,
    QuotationGroupsComponent,
    UserComponent,
    QuotationsComponent,
    QuotationComponent,
    QuotationListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    NgxCurrencyModule
  ],
  providers: [
    ProductService,
    StoreService,
    FactoriesrService,
    QuotationService,
    AuthService,
    AclService,
    AclResolver,
    AclRedirection,
    AuthGuardService,
    QuotationService,
    // ActivatedRouteSnapshot
  ]
})
export class AppAppModule { }
