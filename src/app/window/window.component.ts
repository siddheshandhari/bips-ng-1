import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2, Input, Output, OnInit, HostListener, EventEmitter } from '@angular/core';

class Position {
  constructor(public x: number, public y: number) { }
}

@Component({
  selector: 'window',
  templateUrl: 'window.component.html',
  styleUrls: ['window.component.css'],
  host: {
    '(document: mouseup)': 'onMouseUp($event)',
    '(document: mousemove)': 'onMouseMove($event)',
    '(document: mouseleave)': 'onMouseLeave($event)'
  }
})

export class WindowComponent {
  appTitle = "sample";
  private moving: boolean = false;
  private orignal: Position = null;
  private oldTrans: Position = new Position(0, 0);
  private tempTrans: Position = new Position(0, 0);
  private oldZIndex: string = '';
  private oldPosition: string = '';

  @ViewChild('windowHeader') windowHeader: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2){}
  ngAfterViewInit(){
  }

  private getPosition(x: number, y: number) {
    return new Position(x, y);
  }

  private moveTo(x: number, y: number) {
    if (this.orignal) {
      this.tempTrans.x = x - this.orignal.x;
      this.tempTrans.y = y - this.orignal.y;
      let value = `translate(${this.tempTrans.x + this.oldTrans.x}px, ${this.tempTrans.y + this.oldTrans.y}px)`;
      this.renderer.setStyle(this.el.nativeElement, 'transform', value);
      this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', value);
      this.renderer.setStyle(this.el.nativeElement, '-ms-transform', value);
      this.renderer.setStyle(this.el.nativeElement, '-moz-transform', value);
      this.renderer.setStyle(this.el.nativeElement, '-o-transform', value);
    }
  }

  private pickUp() {
    // get old z-index and position:
    this.oldZIndex = this.el.nativeElement.style.zIndex ? this.el.nativeElement.style.zIndex : '';
    this.oldPosition = this.el.nativeElement.style.position ? this.el.nativeElement.style.position : '';

    if (window) {
      this.oldZIndex = window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("z-index");
      this.oldPosition = window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("position");
    }

    // setup default position:
    let position = 'relative';

    // check if old position is draggable:
    if (this.oldPosition && (
        this.oldPosition === 'absolute' ||
        this.oldPosition === 'fixed' ||
        this.oldPosition === 'relative')) {
      position = this.oldPosition;
    }

    this.renderer.setStyle(this.el.nativeElement, 'position', position);
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '99999');

    if (!this.moving) {
      this.moving = true;
    }
  }

  private putBack() {
    if (this.oldZIndex) {
      this.renderer.setStyle(this.el.nativeElement, 'z-index', this.oldZIndex);
    } else {
      this.el.nativeElement.style.removeProperty('z-index');
    }

    if (this.moving) {
      this.moving = false;
      this.oldTrans.x += this.tempTrans.x;
      this.oldTrans.y += this.tempTrans.y;
    }
  }

  onMouseDown(event: any) {
    this.orignal = this.getPosition(event.clientX, event.clientY);
    this.pickUp();
  }

  onMouseUp() {
    this.putBack();
  }

  onMouseLeave() {
    this.putBack();
  }

  onMouseMove(event: any) {
    if (this.moving) {
      this.moveTo(event.clientX, event.clientY);
    }
  }
}
