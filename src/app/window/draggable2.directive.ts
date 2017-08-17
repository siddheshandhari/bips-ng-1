import { Directive, EventEmitter, HostListener, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

@Directive({
  selector: '[draggable2]'
})

export class DraggableDirective2 implements OnInit{

  constructor(private element: ElementRef){
    let mousedown = Rx.Observable.fromEvent(this.element.nativeElement, 'mousedown');
    let mousemove = Rx.Observable.fromEvent(document, 'mousemove');
    let mouseup = Rx.Observable.fromEvent(this.element.nativeElement, 'mouseup');
    let mousedrag = mousedown.map((md) => {
      let startX = md.offsetX, startY = md.offsetY;
      return mousemove.map((mm) => {
        mm.preventDefault();
      })
    })
  }

  ngOnInit(){

  }
}
