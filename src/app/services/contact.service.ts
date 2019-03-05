import { Injectable } from '@angular/core';

import { generateFakeGuid } from '../helpers/generate-fake-guid';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
import { LogService } from './log/log.service';
import { CreateContactDialogData } from '../components/create-contact-dialog/create-contact-dialog-data';
import { Contact } from '../interfaces/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private logger: LogService, private api: ApiService) { }

  public createContact(data: CreateContactDialogData) {
    this.logger.info('ContactService#createContact ', data);
    return this.api.post(environment.production ? 'contacts' : `contacts/${generateFakeGuid()}`, data);
  }

  public getContacts(path = ''): Observable<Contact[]> {
    this.logger.silly('ContactService#getContacts');
    return this.api.get(`contacts${path}`);
  }

  public getContact(contactId: string): Observable<Contact> {
    this.logger.silly('ContactyService#getContact ', contactId);
    return this.api.get(`contacts/${contactId}`);
  }

  public updateContact(contactId: string, contact: Contact) {
    this.logger.silly('ContactService#updateContact ', contactId, contact);
    return this.api.put(`contacts/${contactId}`, contact);
  }
}
