import { LogService } from './services/log/log.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdvisorGuard implements CanActivate {
  public user;
  constructor(private auth: AuthService, private router: Router, private logger: LogService) {
    this.auth.user$.subscribe(user => (this.user = user));
  }
  private _canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user.role === 'advisor') {
      return true;
    }
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const canActivate = this._canActivate(next, state);
    this.logger.silly('AdvisorGuard canActivate ', canActivate);
    return canActivate;
  }
}
