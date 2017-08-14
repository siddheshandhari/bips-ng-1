import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[menuAutohide]'
})

export class AutoHideDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(){
    this.showMenu();
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hideMenu();
  }

  private hideMenu(){
    this.el.nativeElement.style = {
      bottom: -70,
      opacity: 0.25
    }
  }

  private showMenu(){
    this.el.nativeElement.style = {
      bottom: 0,
      opacity: 1
    }
  }
}
