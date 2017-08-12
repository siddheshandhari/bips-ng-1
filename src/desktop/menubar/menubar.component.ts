import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.css'],
  animations: [
    trigger('menuDisplayState', [
      state('hide', style({
        bottom: "-70px",
        opacity: 0.25
      })),
      state('show', style({
        bottom: "0",
        opacity: 1
      })),
      transition('hide => show', animate('500ms ease-out')),
      transition('show => hide', animate('500ms 3s ease-in'))
    ])
  ]
})
export class MenubarComponent implements OnInit {
  menuDisplay: string;

  constructor(){
    this.menuDisplay = 'hide';
  }

  ngOnInit(){

  }

  hideMenu(){
    this.menuDisplay = 'hide';
  }

  showMenu(){
    this.menuDisplay = 'show';
  }
}
