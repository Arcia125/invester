import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Opportunity } from '../../../interfaces/opportunity';
import { OpportunityService } from '../../../services/opportunity.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  public opportunities$: Observable<Opportunity[]>;
  public displayedColumns = ['amount', 'advisor', 'dateCreated', 'lastActivity', 'actions'];
  constructor(private opportunityService: OpportunityService) { }

  ngOnInit() {
    this.opportunities$ = this.opportunityService.getOpportunities();
  }

}
