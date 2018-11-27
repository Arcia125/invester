import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactService } from '../../../services/contact.service';
import { LogService } from '../../../services/log/log.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public contacts$: Observable<any>;
  public displayedColumns = ['name', 'birthday', 'advisor', 'actions'];
  constructor(private logger: LogService, private contactService: ContactService) { }

  ngOnInit() {
    this.contacts$ = this.contactService.getContacts();
  }

}
