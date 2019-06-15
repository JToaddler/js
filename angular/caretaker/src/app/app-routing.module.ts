import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { CreateAccComponent } from './component/create.account.component';
import { CareTakerComponent } from './component/careTaker.component';
import { AccConfirmationComponent } from './component/acc.confirmation.component';

const routes: Routes = [
  { path: '', component : CareTakerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccComponent },
  { path: 'account-confirmation', component: AccConfirmationComponent },
  { path: '**', redirectTo : '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
