import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public keys = {
    user: 'invester-user'
  };
  public memoryStorage = {};
  constructor() { }

  set(key: string, value: string | any) {
    const parsedValue = typeof value === 'string' ? value : JSON.stringify(value);
    try {
      localStorage.setItem(key, parsedValue);
    } catch (err) {
      console.error(err);
      this.memoryStorage[key] = parsedValue;
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error(err);
      return this.memoryStorage[key];
    }
  }
}
