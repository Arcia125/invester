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
    this.logger.info('OpportunityService#getOpportunities');
    return this.api.get('opportunities');
  }

  public getOpportunity(opportunityId: string): Observable<Opportunity> {
    this.logger.info('OpportunityService#getOpportunity ', opportunityId);
    return this.api.get(`opportunities/${opportunityId}`);
  }

  public updateOpportunity(opportunityId: string, opportunity: Opportunity) {
    this.logger.info('OpportunityService#updateOpportunity', opportunityId);
    return this.api.put(`opportunities/${opportunityId}`, opportunity);
  }
}
