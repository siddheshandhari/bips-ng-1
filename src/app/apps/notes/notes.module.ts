import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddButtonModule } from '../shared/add-button/add-button.module';
import { ModalModule } from '../shared/modal/modal.module';
import { NotesComponent } from './notes.component';

@NgModule({
  imports: [
    AddButtonModule,
    ModalModule,
    CommonModule
  ],
  declarations: [
    NotesComponent
  ],
  exports: [
    NotesComponent
  ]
})

export class NotesModule { }
