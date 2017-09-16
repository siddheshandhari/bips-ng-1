import { NgModule } from '@angular/core';
import { StatusbarComponent } from './statusbar.component';

//Directive
import { ToggleFullScreenDirective } from './toggleFullScreen.directive';

@NgModule({
  imports: [

  ],
  declarations: [
    StatusbarComponent,
    ToggleFullScreenDirective,
  ],
  exports: [
    StatusbarComponent
  ],
})

export class StatusbarModule { }
