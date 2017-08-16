import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  templateUrl: 'sidebar-item.component.html',
  styleUrls: ['sidebar-item.component.css']
})

export class SidebarItemComponent {
  @Input() app: object;
  constructor(){}
}
