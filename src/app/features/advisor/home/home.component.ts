import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BreakpointService } from '../../../services/breakpoint.service';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { LogService } from '../../../services/log/log.service';
import { CreateContactDialogData } from '../../../components/create-contact-dialog/create-contact-dialog-data';
import { CreateContactDialogComponent } from '../../../components/create-contact-dialog/create-contact-dialog.component';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isDesktop: boolean;
  public numberOfColumns: number;
  public columnSpan = 1;
  public rowSpan: number;
  public actionGutters: string;
  public actionColumnSpan: number;

  constructor(public auth: AuthService, public userService: UserService, public breakpoint: BreakpointService, public dialog: MatDialog, private logger: LogService, private contactService: ContactService) {
    breakpoint.isDesktop$.subscribe(isDesktop => {
      this.logger.info(`HomeComponent is in ${isDesktop ? 'desktop' : 'mobile'} mode`);
      this.isDesktop = isDesktop;
      this.numberOfColumns = isDesktop ? 4 : 2;
      this.rowSpan = isDesktop ? 2 : 1;
      this.actionGutters = isDesktop ? '50px' : '10px';
      this.actionColumnSpan = isDesktop ? 1 : 2;
    });
  }

  ngOnInit() { }

  openCreateContactDialog() {
    const data: CreateContactDialogData = {
      firstName: '',
      lastName: '',
      birthday: null,
      advisor: '',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: ''
      }
    };
    const options = {
      width: '500px',
      maxWidth: '90vw',
      data
    };
    const dialogRef = this.dialog.open(CreateContactDialogComponent, options);
    dialogRef.afterClosed().subscribe(result => {
      this.logger.info('CreateContactDialogComponent closed ', result);
      if (!result) {
        return;
      }
      this.contactService.createContact(result).subscribe(response => {
        this.logger.info('Response: ', response);
      });
    });
  }
}
