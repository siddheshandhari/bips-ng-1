import { Component  } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent {

  isSidebarOpen = true;

  sidebarOpen(){
    this.isSidebarOpen = true;
  }

  sidebarClose(){
    this.isSidebarOpen= false;
  }

}
