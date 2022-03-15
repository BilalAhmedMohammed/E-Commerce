import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductCardComponent } from './Product/product-card/product-card.component';
import { CheckPipe } from './check.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFounPageComponent } from './not-foun-page/not-foun-page.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { RequestInterceptor } from './request.interceptor';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductCardComponent,
    CheckPipe,
    NotFounPageComponent,
    ProductDetailsComponent,
    CartComponent,
    LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
