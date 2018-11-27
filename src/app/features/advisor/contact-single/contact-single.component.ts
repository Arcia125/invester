import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { LogService } from '../../../services/log/log.service';
import { Contact } from '../../../interfaces/contact';
import { ContactService } from '../../../services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-single',
  templateUrl: './contact-single.component.html',
  styleUrls: ['./contact-single.component.css']
})
export class ContactSingleComponent implements OnInit {
  public contact$: Observable<Contact>;
  public contactSubscription: Subscription;
  public contact: Contact;
  public error: string | null;
  public loading = true;
  @ViewChild('form') form: NgForm;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private logger: LogService, private router: Router) { }

  ngOnInit() {
    this.initializeContactSubscription();
  }

  initializeContactSubscription() {
    this.contact$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.contactService.getContact(params.get('id')))
    );
    this.contactSubscription = this.contact$.subscribe(contact => {
      this.loading = false;
      this.contact = contact;
    });
  }

  onSubmit() {
    this.contactService.updateContact(this.route.snapshot.params['id'], this.contact).subscribe(this.handleSubmitSuccess, this.handleSubmitError);
  }

  handleSubmitSuccess = (response) => {
    this.logger.info('Successfully updated contact ', response);
    this.error = null;
    this.loading = true;
    this.contactSubscription.unsubscribe();
    this.initializeContactSubscription();
  }

  handleSubmitError = (errorResponse) => {
    const errorMessage = (errorResponse.body && errorResponse.body.error) || 'Error updating contact';
    this.error = errorMessage;
  }

}
