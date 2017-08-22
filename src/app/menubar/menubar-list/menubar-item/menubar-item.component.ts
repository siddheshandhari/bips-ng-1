import { Component, Input } from '@angular/core';

@Component({
  selector: 'menubar-item',
  templateUrl: 'menubar-item.component.html',
  styleUrls: ['menubar-item.component.css']
})

export class MenubarItemComponent {
  @Input() app: object;
}
