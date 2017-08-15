import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
  selector: '[toggleFullScreen]'
})

export class ToggleFullScreenDirective {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ){}
  @HostBinding('class.isFullScreen') isFullScreen = false;
  @HostListener('click') onClick(){
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullScreen = screenfull.isFullscreen;
    }
  }
}
