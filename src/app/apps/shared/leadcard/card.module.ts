import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardContactComponent } from './card-body/card-contact/card-contact.component';
import { CardOwnerComponent } from './card-body/card-owner/card-owner.component';
import { SubheaderComponent } from './card-header/subheader/subheader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardContactComponent,
    CardOwnerComponent,
    SubheaderComponent
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardContactComponent,
    CardOwnerComponent,
    SubheaderComponent
  ]
})
export class CardModule { }
