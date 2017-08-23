import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class CrmNavbarComponent{
  @Input() getRouterStatus: string;
  @Output() getRouterStatusChange = new EventEmitter<string>();
  navbarActive = false;
  constructor() {}

  changeRouter(newRouter){
    this.getRouterStatusChange.emit(newRouter);
  }

  // ngOnInit(){
  //   this.activeNavbar();
  // }

  // activeNavbar(){
  //   this.navbarActive = true;
  // }

}
