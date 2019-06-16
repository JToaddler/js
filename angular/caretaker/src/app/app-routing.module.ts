import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { CreateAccComponent } from './component/create.account.component';
import { CareTakerComponent } from './component/careTaker.component';
import { AccConfirmationComponent } from './component/acc.confirmation.component';
import { RouteGuardTest } from './service/route.guard.test';

const routes: Routes = [
  { path: '', component: CareTakerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccComponent },
  { path: 'account-confirmation', component: AccConfirmationComponent, canActivate: [RouteGuardTest] },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
