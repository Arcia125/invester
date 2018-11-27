import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  imports: [CommonModule, SharedComponentsModule],
  declarations: [LoginComponent, HeaderComponent]
})
export class LoginModule { }
