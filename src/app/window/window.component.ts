import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_TOP_WINDOW } from '../../reducers/topWindow.reducer';

interface TopWindowState {
  topWindow: object;
}

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
    '(document: mouseleave)': 'onMouseUp($event)'
  }
})

export class WindowComponent {
  topWindow: object;
  appTitle = "sample";
  private moving: boolean = false;
  private orignal: Position = null;
  private oldTrans: Position = new Position(0, 0);
  private tempTrans: Position = new Position(0, 0);
  private oldZIndex: string = '';
  private oldPosition: string = '';

  constructor(private store: Store<TopWindowState>, private el: ElementRef, private renderer: Renderer2){
    store.select('topWindow').subscribe(state => this.topWindow = state);
  }

  private getPosition(x: number, y: number) {
    return new Position(x, y);
  }

  onMouseDown(event: any) {
    this.orignal = this.getPosition(event.clientX, event.clientY);
    this.oldZIndex = this.el.nativeElement.style.zIndex ? this.el.nativeElement.style.zIndex : '';
    if (window) {
      this.oldZIndex = this.topWindow['zIndex'];
      this.renderer.setStyle(this.el.nativeElement, 'z-index', this.oldZIndex + 1);
      this.store.dispatch({
        type: SET_TOP_WINDOW,
        window: {
          zIndex: this.oldZIndex + 1,
        }
      })
    }
    if (!this.moving) {
      this.moving = true;
    }
  }

  onMouseUp() {
    if (this.moving) {
      this.moving = false;
      this.oldTrans.x += this.tempTrans.x;
      this.oldTrans.y += this.tempTrans.y;
    }
  }

  onMouseMove(event: any) {
    if (this.moving) {
      if (this.orignal) {
        this.tempTrans.x = event.clientX - this.orignal.x;
        this.tempTrans.y = event.clientY - this.orignal.y;
        let value = `translate(${this.tempTrans.x + this.oldTrans.x}px, ${this.tempTrans.y + this.oldTrans.y}px)`;
        this.renderer.setStyle(this.el.nativeElement, 'transform', value);
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', value);
        this.renderer.setStyle(this.el.nativeElement, '-ms-transform', value);
        this.renderer.setStyle(this.el.nativeElement, '-moz-transform', value);
        this.renderer.setStyle(this.el.nativeElement, '-o-transform', value);
      }
    }
  }
}
