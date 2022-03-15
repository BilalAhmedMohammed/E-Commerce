import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NotFounPageComponent } from './not-foun-page/not-foun-page.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { ProductListComponent } from './Product/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: ProductDetailsComponent },
  {path:'Auth'
  ,loadChildren:() => import ('./Auth/auth.module').then(m=>m.AuthModule)},
  { path: '**', component: NotFounPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
