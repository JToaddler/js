import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';


@Injectable()
export class RouteGuardTest implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {

  }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.accountService.isGuest()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

}
