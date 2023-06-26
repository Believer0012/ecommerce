import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAddProductListComponent } from './seller-add-product-list/seller-add-product-list.component';
import { SellerViewProductComponent } from './seller-view-product/seller-view-product.component';
import { SellerEditProductComponent } from './seller-edit-product/seller-edit-product.component';
import { SellerDeleteProductComponent } from './seller-delete-product/seller-delete-product.component';
import { SellerUserLoginComponent } from './seller-user-login/seller-user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserViewProductComponent } from './user-view-product/user-view-product.component';

const routes: Routes = [
  {
    path: '',
    component: SellerHomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-add-productList',
    component: SellerAddProductListComponent,
    canActivate: [AuthGuard]
  },
  {



    path: 'seller-view-product/:id',
    component: SellerViewProductComponent,
    canActivate: [AuthGuard]



  },

  {
    path: 'seller-edit-product/:id',
    component: SellerEditProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-delete-product/:id',
    component: SellerDeleteProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-user-login',
    component: SellerUserLoginComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'user-home',
    component:UserHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-view-product/:id',
    component:UserViewProductComponent,
    canActivate: [AuthGuard]
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
