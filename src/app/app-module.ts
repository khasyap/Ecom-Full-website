import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Addproducts } from './addproducts/addproducts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http';
import { Navbar } from './navbar/navbar';
import { Manageproducts } from './manageproducts/manageproducts';
import { Usernavbar } from './user/usernavbar/usernavbar';
import { Userview } from './user/userview/userview';
import { Usercart } from './user/usercart/usercart';

@NgModule({
  declarations: [
    App,
    Home,
    Addproducts,
    Navbar,
    Manageproducts,
    Usernavbar,
    Userview,
    Usercart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
