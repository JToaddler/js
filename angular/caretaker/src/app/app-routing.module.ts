import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { CreateAccComponent } from './component/createAccount.component';
import { CareTakerComponent } from './component/CareTakerComponent';

const routes: Routes = [
  { path: '', component : CareTakerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccComponent },
  { path: '**', redirectTo : '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
