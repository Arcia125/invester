import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import { OpportunityService } from '../../../services/opportunity.service';
import { LogService } from '../../../services/log/log.service';
import { Opportunity } from '../../../interfaces/opportunity';

@Component({
  selector: 'app-opportunity-single',
  templateUrl: './opportunity-single.component.html',
  styleUrls: ['./opportunity-single.component.css']
})
export class OpportunitySingleComponent implements OnInit {
  public opportunity$: Observable<Opportunity>;
  public opportunity: Opportunity;
  public error: string | null;
  public loading = true;
  @ViewChild('form') form: NgForm;
  constructor(private opportunityService: OpportunityService, private route: ActivatedRoute, private logger: LogService) { }

  ngOnInit() {
    this.opportunity$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.opportunityService.getOpportunity(params.get('id')))
    );
    this.opportunity$.subscribe(opportunity => {
      this.loading = false;
      this.opportunity = opportunity;
    });
  }

}
