import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardContactComponent } from './card-body/card-contact/card-contact.component';
import { CardOwnerComponent } from './card-body/card-owner/card-owner.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardContactComponent,
    CardOwnerComponent
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }
