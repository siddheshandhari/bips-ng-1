import { Directive, HostListener, HostBinding} from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
  selector: '[toggleFullScreen]'
})

export class ToggleFullScreenDirective {
  constructor(

  ){}
  @HostBinding('class.isFullScreen') isFullScreen = false;
  @HostListener('click') onClick(){
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullScreen = screenfull.isFullscreen;
    }
  }
}
