import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class CrmNavbarComponent {
  @Input() getRouterStatus: string;
  @Output() getRouterStatusChange = new EventEmitter<string>();
  constructor() { }

  changeRouter(newRouter){
    this.getRouterStatusChange.emit(newRouter)
  }

}
