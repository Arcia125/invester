import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CreateContactDialogData } from './create-contact-dialog-data';

@Component({
  selector: 'app-create-contact-dialog',
  templateUrl: './create-contact-dialog.component.html',
  styleUrls: ['./create-contact-dialog.component.css']
})
export class CreateContactDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateContactDialogData
  ) { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
