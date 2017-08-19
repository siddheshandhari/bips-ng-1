import { NgModule } from '@angular/core';
import { WindowComponent } from './window.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WindowComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WindowComponent,
  ]

})

export class WindowModule{}
