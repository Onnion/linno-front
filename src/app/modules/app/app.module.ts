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
import { CartQuotesListComponent } from './components/cart-quotes-list/cart-quotes-list.component';
import { CartQuoteComponent } from './components/cart-quote/cart-quote.component';
import { QuoteService } from './services/quote/quote.service';
import { LoadingModule } from '../common/loading/loading.module';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './views/orders/orders.component';
import { UserComponent } from './views/user/user.component';
// import { ActivatedRouteSnapshot } from '@angular/router';

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
    CartQuotesListComponent,
    CartQuoteComponent,
    MenuComponent,
    OrdersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
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
