import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './component/login.component';
import { CreateAccComponent } from './component/createAccount.component';
import { CareTakerComponent } from './component/CareTakerComponent';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccComponent,
    CareTakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
