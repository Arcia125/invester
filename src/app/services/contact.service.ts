import { Injectable } from '@angular/core';

import { generateFakeGuid } from '../helpers/generate-fake-guid';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
import { LogService } from './log/log.service';
import { CreateContactDialogData } from '../components/create-contact-dialog/create-contact-dialog-data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private logger: LogService, private api: ApiService) { }

  public createContact(data: CreateContactDialogData) {
    this.logger.info('ContactService#createContact ', data);
    return this.api.post(environment.production ? 'contacts' : `contacts/${generateFakeGuid()}`, data);
  }

  public getContacts() {
    this.logger.silly('ContactService#getContacts');
    return this.api.get('contacts');
  }
}
