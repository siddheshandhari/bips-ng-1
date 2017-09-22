import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNoteComponent } from './add-note.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    AddNoteComponent
  ],
  exports: [
    AddNoteComponent
  ]
})

export class AddNoteModule {

}
