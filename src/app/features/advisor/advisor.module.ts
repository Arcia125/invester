import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PipesModule } from '../../pipes/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    PipesModule
  ],
  declarations: [HomeComponent, HeaderComponent]
})
export class AdvisorModule { }
