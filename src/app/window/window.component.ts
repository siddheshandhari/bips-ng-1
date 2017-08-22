import { Component, ElementRef, Renderer2, OnInit, Input, ViewChild, OnChanges } from '@angular/core';

//reducer
import { Store } from '@ngrx/store';
import { SET_TOP_WINDOW } from '../../reducers/topWindow.reducer';
import { ADD_HIDE_APPS } from '../../reducers/hideApps.reducer';

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
  @ViewChild('windowBody') private windowBody: ElementRef;
  private isMax: boolean;
  private isMin: boolean;
  private topWindow: any;
  private appTitle: string;
  private oldLeft: number;
  private oldTop: number;
  private historyPos: any;
  private historySize: any;
  private oldX: number;
  private oldY: number;
  private moving: boolean = false;
  private topLeft: number;
  private topTop: number;
  private topZindex: number;

  constructor(private store: Store<TopWindowState>, private el: ElementRef, private renderer: Renderer2, private appsService: AppsService){
    store.select('topWindow').subscribe(state => {
      this.topWindow = state;

    });
  }

  ngOnInit(){
    //Set the window title
    this.appTitle = this.appsService.appsDict.find(app => app.id == this.appId).name;
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
        appId: this.appId,
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
    this.liftWindow();
    if (!this.moving) {
      this.moving = true;
    };
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
          appId: this.appId,
          left: this.oldLeft + l,
          top: this.oldTop + t
        }
      })
    }
  }

  //increnment the zIndex of the clicked winodow by 1
  liftWindow() {
    if(window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("z-index") < this.topWindow.zIndex){
      this.topZindex = this.topWindow.zIndex;
      //make the current window as topmost window
      this.renderer.setStyle(this.el.nativeElement, 'z-index', this.topZindex + 1);
      //update the store
      this.store.dispatch({
        type: SET_TOP_WINDOW,
        window: {
          appId: this.appId,
          zIndex: this.topZindex + 1,
        }
      })
    }
  }

  minWindow() {
    this.store.dispatch({
      type: ADD_HIDE_APPS,
      appId: this.appId
    })
  }

  maxWindow() {
    if(!this.isMax){
      this.historyPos = {
        left: this.el.nativeElement.offsetLeft,
        top: this.el.nativeElement.offsetTop
      };
      this.historySize = {
        width: window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("width"),
        height: window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("height")
      };
      this.renderer.setStyle(this.el.nativeElement, 'left', '230px');
      this.renderer.setStyle(this.el.nativeElement, 'top', '0px');
      this.renderer.setStyle(this.windowBody.nativeElement, 'width', (window.screen.width) - 230 + 'px');
      this.renderer.setStyle(this.windowBody.nativeElement, 'height', (window.screen.height) + 'px');
      this.isMax = true;
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'left', this.historyPos.left + 'px');
      this.renderer.setStyle(this.el.nativeElement, 'top', this.historyPos.top + 'px');
      this.renderer.setStyle(this.windowBody.nativeElement, 'width', this.historySize.width);
      this.renderer.setStyle(this.windowBody.nativeElement, 'height', this.historySize.height);
      this.isMax = false;
    }
  }

  closeWindow() {
    this.appsService.closeApp(this.appId)
  }

}
