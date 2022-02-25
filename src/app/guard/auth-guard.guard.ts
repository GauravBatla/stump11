import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  token: any
  user: any;
  roll: any
  flag: string | undefined
  constructor(private _route: Router,) {
    this.token = localStorage.getItem('token')
    this.user = localStorage.getItem('user')
    this.roll = JSON.parse(this.user);
    //  this.flag = this.roll.user_roll
    console.log(this.token, "ok");

  };


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (!this.authService.authenticate()) {
    // if (this.roll.user_roll == 'admin') {
    //   // localStorage.setItem('login', 'admin')
    // }
    //   this._route.navigate(['/'])
    // }
    // else {
    //   localStorage.setItem('login', 'false')
    //   this._route.navigate(['/'])
    //   return false;
    // }
    var isAuthenticated = true//this.authService.authenticate()
    if (!this.token) {
      this._route.navigate(['/login']);
    }
    return true;
  }

}
