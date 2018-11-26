import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  declarations: [LoginComponent, HeaderComponent]
})
export class LoginModule { }
