import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { UserDashboard } from '../interfaces/user-dashboard';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _dashboard$: Observable<UserDashboard>;
  public user: User;

  public get dashboard$() {
    if (!this._dashboard$) {
      return this._dashboard$ = this.getDashboardViaApi();
    }
    return this._dashboard$;
  }

  public set dashboard$(dashboard$: Observable<UserDashboard>) {
    this._dashboard$ = dashboard$;
  }

  constructor(private auth: AuthService, private api: ApiService) {
    this.auth.user$.subscribe(user => (this.user = user));
  }

  private getDashboardViaApi(): Observable<UserDashboard> {
    return this.api.get(`dashboards/${this.user.dashboardId}`);
  }

  /**
   * @description to manually pull the data from the api
   */
  fetchDashboardInfo(): Observable<UserDashboard> {
    return this.dashboard$ = this.getDashboardViaApi();
  }
}
