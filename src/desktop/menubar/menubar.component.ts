import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  menuHide = false;

  ngOnInit(){
    this.hideMenu();
  }

  hideMenu(){
    setTimeout(() => {
      this.menuHide = true;
    }, 3000)
  }

  showMenu(){
    this.menuHide = false;
  }
}
