import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LogService } from './log/log.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseEndpoint = '/api/';
  constructor(private httpClient: HttpClient, private logger: LogService) { }

  private getFullEndpoint(path: string) {
    return `${this.baseEndpoint}${path}`;
  }

  public get(path: string, params = {}) {
    const endpoint = this.getFullEndpoint(path);
    const observable = this.httpClient.get(endpoint, params);
    this.logger.info('GET ', endpoint, observable);
    return observable;
  }

  public post(path: string, params = {}) {
    const endpoint = this.getFullEndpoint(path);
    const observable = this.httpClient.post(endpoint, params);
    this.logger.info('POST ', endpoint, observable);
    return observable;
  }

  public put(path: string, params = {}) {
    const endpoint = this.getFullEndpoint(path);
    const observable = this.httpClient.put(endpoint, params);
    this.logger.info('PUT ', endpoint, observable);
    return observable;
  }

  public delete(path: string, params = {}) {
    const endpoint = this.getFullEndpoint(path);
    const observable = this.httpClient.delete(endpoint, params);
    this.logger.info('DELETE ', endpoint, observable);
    return observable;
  }
}
