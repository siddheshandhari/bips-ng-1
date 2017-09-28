import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusbarComponent } from './statusbar.component';
import { ClockComponent } from './clock/clock.component';

//Directive
import { ToggleFullScreenDirective } from './toggleFullScreen.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StatusbarComponent,
    ToggleFullScreenDirective,
    ClockComponent
  ],
  exports: [
    StatusbarComponent
  ],
})

export class StatusbarModule { }
