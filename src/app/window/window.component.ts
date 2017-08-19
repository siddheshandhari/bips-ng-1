import { Component, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

//reducer
import { Store } from '@ngrx/store';
import { SET_TOP_WINDOW } from '../../reducers/topWindow.reducer';

//Service
import { AppsService } from '../apps/apps.service';

interface TopWindowState {
  topWindow: object;
}

@Component({
  selector: 'window',
  templateUrl: 'window.component.html',
  styleUrls: ['window.component.css'],
  providers: [AppsService],
  host: {
    '(document: mouseup)': 'onMouseUp($event)',
    '(document: mousemove)': 'onMouseMove($event)',
    '(document: mouseleave)': 'onMouseUp($event)'
  }
})

export class WindowComponent implements OnInit {
  @Input() private appId: number;
  topWindow;
  appTitle = "sample";
  private oldLeft: number;
  private oldTop: number;
  private oldX: number;
  private oldY: number;
  private moving: boolean = false;
  private topLeft: number;
  private topTop: number;
  private topZindex: number;

  constructor(private store: Store<TopWindowState>, private el: ElementRef, private renderer: Renderer2, private appsService: AppsService){
    store.select('topWindow').subscribe(state => this.topWindow = state);
  }

  ngOnInit(){
    //get the zindex of the topWindow zIndex
    this.topZindex = this.topWindow.zIndex;
    this.topLeft = this.topWindow.left;
    this.topTop = this.topWindow.top;
    this.renderer.setStyle(this.el.nativeElement, 'z-index', this.topZindex + 1);
    this.renderer.setStyle(this.el.nativeElement, 'left', this.topLeft + 20 + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'top', this.topTop + 20 + 'px');
    this.store.dispatch({
      type: SET_TOP_WINDOW,
      window: {
        zIndex: this.topZindex + 1,
        left: this.topLeft + 20,
        top: this.topTop + 20
      }
    })
  }

  onMouseDown(event: any) {
    //record the mouse position
    this.oldLeft = this.el.nativeElement.offsetLeft;
    this.oldTop = this.el.nativeElement.offsetTop;
    this.oldX = event.clientX;
    this.oldY = event.clientY;
    this.topZindex = this.topWindow.zIndex;
    //make the current window as topmost window
    this.renderer.setStyle(this.el.nativeElement, 'z-index', this.topZindex + 1);
    //update the store
    this.store.dispatch({
      type: SET_TOP_WINDOW,
      window: {
        zIndex: this.topZindex + 1,
      }
    })
    if (!this.moving) {
      this.moving = true;
    }
  }

  onMouseUp() {
    if (this.moving) {
      this.moving = false;
    }
  }

  onMouseMove(event: any) {
    if (this.moving) {
      let l = event.clientX - this.oldX
      let t = event.clientY - this.oldY
      if(event.clientY < 0) {
        t = 0;
      }
      this.renderer.setStyle(this.el.nativeElement, 'left', this.oldLeft + l + 'px');
      this.renderer.setStyle(this.el.nativeElement, 'top', this.oldTop + t + 'px');
      this.store.dispatch({
        type: SET_TOP_WINDOW,
        window: {
          left: this.oldLeft + l,
          top: this.oldTop + t
        }
      })
    }
  }

  closeWindow() {
    this.appsService.closeApp(this.appId)
  }

}
