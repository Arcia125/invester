
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayNamePipe } from '../user-display-name.pipe';

const exportedDeclarations = [UserDisplayNamePipe];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations]
})
export class PipesModule { }
