import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseEndpoint = '/api/';
  constructor(private httpClient: HttpClient) { }

  private getFullEndpoint(path) {
    return `${this.baseEndpoint}${path}`;
  }

  public get(path: string, params = {}) {
    return this.httpClient.get(this.getFullEndpoint(path), params);
  }

  public post(path: string, params = {}) {
    return this.httpClient.post(this.getFullEndpoint(path), params);
  }

  public put(path: string, params = {}) {
    return this.httpClient.put(this.getFullEndpoint(path), params);
  }

  public delete(path: string, params = {}) {
    return this.httpClient.delete(this.getFullEndpoint(path), params);
  }
}
