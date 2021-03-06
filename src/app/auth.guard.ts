import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LogService } from './services/log/log.service';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public user = null;
  constructor(private auth: AuthService, private router: Router, private logger: LogService) {
    this.auth.user$.subscribe(user => (this.user = user));
  }

  private _canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user) {
      // a user is logged in / found in storage
      if (state.url === '/') {
        // we're on the blank '/' page, we need to redirect to one of the user verticals
        this.router.navigate(['/' + this.user.role]);
        return false;
      }
      // we're on the right track, continue navigation
      return true;
    }
    // no user is logged in, redirect them to the login page
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const canActivate = this._canActivate(next, state);
    this.logger.silly('AuthGuard canActivate ', canActivate);
    return canActivate;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }
}
