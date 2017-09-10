import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

import { CardBodyComponent } from './card-body/card-body.component';
import { CardContentComponent } from './card-body/card-content/card-content.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardContentComponent

  ],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardContentComponent

  ]
})
export class CardModule { }
