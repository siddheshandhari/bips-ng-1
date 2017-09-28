import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardCloseBtnComponent } from './card-close-btn/card-close-btn.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardComponent,
    CardCloseBtnComponent
  ],
  exports: [
    CardComponent,
    CardCloseBtnComponent
  ]
})
export class CardModule { }
