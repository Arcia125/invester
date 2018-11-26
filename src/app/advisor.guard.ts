import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdvisorGuard implements CanActivate {
  public user;
  constructor(private auth: AuthService, private router: Router) {
    this.auth.user$.subscribe(user => (this.user = user));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.user);
    if (this.user.role === 'advisor') {
      return true;
    }
    return false;
  }
}
