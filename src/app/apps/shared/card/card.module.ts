import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardContactComponent } from './card-body/card-contact/card-contact.component';
import { CardOwnerComponent } from './card-body/card-owner/card-owner.component';
import { SocialTagComponent } from './card-header/social-tag.component';
import { IndustryTagComponent } from './card-header/industry-tag.component';
import { AddressTagComponent } from './card-header/address-tag.component';
import { WebsiteTagComponent } from './card-header/website-tag.component';

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
    IndustryTagComponent,
    AddressTagComponent,
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardContactComponent,
    CardOwnerComponent,
    IndustryTagComponent,
    AddressTagComponent,
    // SocialTagComponent,
    // WebsiteTagComponent
  ]
})
export class CardModule { }
