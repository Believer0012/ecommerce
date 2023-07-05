import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { FilterPipe } from './filter.pipe';
import { SellerAddProductListComponent } from './seller-add-product-list/seller-add-product-list.component';
import { SellerViewProductComponent } from './seller-view-product/seller-view-product.component';
import { SellerEditProductComponent } from './seller-edit-product/seller-edit-product.component';
import { SellerDeleteProductComponent } from './seller-delete-product/seller-delete-product.component';
import { SellerUserLoginComponent } from './seller-user-login/seller-user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserViewProductComponent } from './user-view-product/user-view-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrderListComponent } from './my-order-list/my-order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    FilterPipe,
    SellerAddProductListComponent,
    SellerViewProductComponent,
    SellerEditProductComponent,
    SellerDeleteProductComponent,
    SellerUserLoginComponent,
    UserHomeComponent,
    UserViewProductComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    MyOrderListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
