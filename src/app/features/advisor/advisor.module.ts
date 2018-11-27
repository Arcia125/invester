import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PipesModule } from '../../pipes/pipes.module';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { AdvisorComponent } from './advisor.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    PipesModule,
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [HomeComponent, HeaderComponent, AdvisorComponent]
})
export class AdvisorModule { }
