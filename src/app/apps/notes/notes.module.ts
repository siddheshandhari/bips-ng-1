import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteSidebarComponent } from './note-sidebar/note-sidebar.component';

import { MomentModule } from 'angular2-moment';
import { CardModule } from '../shared/card/card.module';
import { AddButtonModule } from '../shared/add-button/add-button.module';
import { ModalModule } from '../shared/modal/modal.module';
import { WindowNavModule } from '../shared/window-nav/window-nav.module';
import { AddNoteModule } from './add-note/add-note.module';
import { NotesComponent } from './notes.component';

import { NotesService } from './notes.service';

@NgModule({
  imports: [
    CommonModule,
    AddButtonModule,
    ModalModule,
    AddNoteModule,
    WindowNavModule,
    CardModule,
    MomentModule
  ],
  declarations: [
    NotesComponent,
    NoteListComponent,
    NoteSidebarComponent
  ],
  exports: [
    NotesComponent
  ],
  providers: [
    NotesService,
  ]
})

export class NotesModule { }
