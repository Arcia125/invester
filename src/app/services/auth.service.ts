import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StorageService } from './storage.service';
import { ApiService } from './api.service';
import { environment } from './../../environments/environment';
import { LogService } from './log/log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$ = new BehaviorSubject(null);
  constructor(private api: ApiService, private storage: StorageService, private logger: LogService) {
    const userFromStorage = storage.get(storage.keys.user);
    logger.info('AuthService got user from storage: ', userFromStorage);
    this.user$.next(userFromStorage);
  }

  private authenticateWithApi(email, password) {
    this.logger.silly('AuthService.authenticateWithApi called with email ', email, 'password ', password);
    if (!environment.production) {
      this.logger.info('AuthService.authenticateWithApi using custom auth endpoint for testing environment.');
      return this.api.get('users/test-user');
    }
    return this.api.post('authenticate', { email, password });
  }

  private loginUser(user) {
    this.logger.silly('AuthService.loginUser called with user ', user);
    this.storage.set(this.storage.keys.user, user);
    this.user$.next(user);
  }

  public async loginWithCredentials(email, password) {
    this.logger.silly('AuthService.loginWithCredentials called with email ', email, 'password', password);
    const user = await this.authenticateWithApi(email, password).toPromise();
    this.logger.silly('user authenticated.');
    this.loginUser(user);
    return user;
  }

  public logout() {
    this.logger.info('logging out...');
    this.storage.set(this.storage.keys.user, null);
    this.user$.next(null);
  }
}
