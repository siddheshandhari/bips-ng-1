import { Directive, HostListener, HostBinding} from '@angular/core';


@Directive({
  selector: '[resizeSidebar]'
})

export class ResizeSidebarDirective {
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