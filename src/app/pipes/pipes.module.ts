
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDisplayNamePipe } from './user-display-name.pipe';
import { PlaceholderPipe } from './placeholder.pipe';

const exportedDeclarations = [UserDisplayNamePipe, PlaceholderPipe];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations]
})
export class PipesModule { }
