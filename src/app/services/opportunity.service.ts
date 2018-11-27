import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { LogService } from './log/log.service';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private logger: LogService, private api: ApiService) { }

  public getOpportunities() {
    this.logger.silly('OpportunityService#getOpportunities');
    return this.api.get('opportunities');
  }
}
