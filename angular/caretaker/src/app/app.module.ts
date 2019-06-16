import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './component/login.component';
import { CreateAccComponent } from './component/create.account.component';
import { CareTakerComponent } from './component/careTaker.component';
import { HttpClientModule } from '@angular/common/http';
import { AccConfirmationComponent } from './component/acc.confirmation.component';
import { RouteGuardTest } from './service/route.guard.test';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccComponent,
    CareTakerComponent,
    AccConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RouteGuardTest],
  bootstrap: [AppComponent]
})
export class AppModule { }
