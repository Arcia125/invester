import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StorageService } from './storage.service';
import { ApiService } from './api.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$ = new BehaviorSubject(null);
  constructor(private api: ApiService, private storage: StorageService) {
    this.user$.next(storage.get(storage.keys.user));
  }

  private authenticateWithApi(email, password) {
    if (!environment.production) {
      return this.api.get('users/test-user');
    }
    return this.api.post('authenticate', { email, password });
  }

  private loginUser(user) {
    this.storage.set(this.storage.keys.user, user);
    this.user$.next(user);
  }

  public async loginWithCredentials(email, password) {
    const user = await this.authenticateWithApi(email, password).toPromise();
    this.loginUser(user);
    return user;
  }

  public logout() {
    this.storage.set(this.storage.keys.user, null);
    this.user$.next(null);
  }

}
