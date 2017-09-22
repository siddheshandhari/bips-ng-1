import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddNoteComponent } from './add-note.component';

import { CompanyService } from '../../../core/services/company.service';

import { APP_CONFIG, BIPS_CONFIG } from '../../../app.config';

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
  ],
  providers: [
    CompanyService,
    { provide: APP_CONFIG, useValue: BIPS_CONFIG }
  ]
})

export class AddNoteModule {

}
