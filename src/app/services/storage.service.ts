import { Injectable } from '@angular/core';

import { LogService } from './log/log.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public keys = {
    user: 'invester-user'
  };
  public memoryStorage = {};
  constructor(private logger: LogService) { }

  set(key: string, value: string | any) {
    const parsedValue = typeof value === 'string' ? value : JSON.stringify(value);
    this.logger.silly('StorageService setting key ', key, 'to value ', value);
    try {
      localStorage.setItem(key, parsedValue);
    } catch (err) {
      console.error(err);
      this.memoryStorage[key] = parsedValue;
    }
  }

  get(key: string) {
    this.logger.silly('StorageService getting key ', key);
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error(err);
      return this.memoryStorage[key];
    }
  }
}
