import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: '../views/login.component.html'
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
    console.log('Login Component Oninit');
  }
}
