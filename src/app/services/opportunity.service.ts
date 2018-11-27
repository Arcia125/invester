import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { LogService } from './log/log.service';
import { Opportunity } from '../interfaces/opportunity';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private logger: LogService, private api: ApiService) { }

  public getOpportunities(): Observable<Opportunity[]> {
    this.logger.silly('OpportunityService#getOpportunities');
    return this.api.get('opportunities');
  }

  public getOpportunity(opportunityId: string): Observable<Opportunity> {
    this.logger.silly('OpportunityService#getOpportunity ', opportunityId);
    return this.api.get(`opportunities/${opportunityId}`);
  }
}
