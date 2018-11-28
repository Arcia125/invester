import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TwoLineInfoComponent } from './two-line-info/two-line-info.component';
import { CreateContactDialogComponent } from './create-contact-dialog/create-contact-dialog.component';
import { ModalFormGroupComponent } from './modal-form-group/modal-form-group.component';
import { SvgChevronComponent } from './svg-chevron/svg-chevron.component';

const materialModules = [MatButtonModule, MatGridListModule, LayoutModule, MatDialogModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatDividerModule, MatTableModule, MatProgressSpinnerModule, MatSidenavModule];
const exportedDeclarations = [TwoLineInfoComponent, CreateContactDialogComponent, ModalFormGroupComponent, SvgChevronComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules
  ],
  entryComponents: [CreateContactDialogComponent],
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations, ...materialModules, FormsModule]
})
export class SharedComponentsModule { }
