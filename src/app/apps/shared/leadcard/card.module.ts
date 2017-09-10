import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardContactComponent } from './card-body/card-contact/card-contact.component';
import { CardContentComponent } from './card-body/card-content/card-content.component';
import { SubheaderComponent } from './card-header/subheader/subheader.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardContactComponent,
    SubheaderComponent,
    CardContentComponent
   
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardContactComponent,
    SubheaderComponent,
    CardContentComponent
   
  ]
})
export class CardModule { }
