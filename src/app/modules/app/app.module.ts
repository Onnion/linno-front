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
import { CategoryService } from './services/category/category.service';
import { ProductService } from './services/product/product.service';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FabricatorsComponent } from './views/fabricators/fabricators.component';
import { FabricatorListComponent } from './components/fabricator-list/fabricator-list.component';
import { FabricatorComponent } from './components/fabricator/fabricator.component';
import { FabricatorService } from './services/fabricator/fabricator.service';
import { CartComponent } from './views/cart/cart.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { AclService } from 'ng2-acl';
import { AclResolver, AclRedirection } from './app.resolve';
import { AuthGuardService } from './app.guard';
import { CartOrderListComponent } from './components/cart-order-list/cart-order-list.component';
import { CartOrderComponent } from './components/cart-order/cart-order.component';
import { QuoteService } from './services/quote/quote.service';
import { LoadingModule } from '../common/loading/loading.module';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './views/orders/orders.component';
import { UserComponent } from './views/user/user.component';
import { QuotationsComponent } from './views/quotations/quotations.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { QuotationListComponent } from './components/quotation-list/quotation-list.component';
import { CurrencyPipeModule } from 'src/app/helpers/pipes/currency/currency.pipe.module';
// import { ActivatedRouteSnapshot } from '@angular/router';
import { NgxCurrencyModule } from "ngx-currency";

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
    OrdersComponent,
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
    CategoryService,
    ProductService,
    StoreService,
    FabricatorService,
    AuthService,
    AclService,
    AclResolver,
    AclRedirection,
    AuthGuardService,
    QuoteService,
    // ActivatedRouteSnapshot
  ]
})
export class AppAppModule { }
