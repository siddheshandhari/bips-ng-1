import { Component, Input } from '@angular/core';

@Component({
  selector: 'menubar-list',
  templateUrl: 'menubar-list.component.html',
  styleUrls: ['menubar-list.component.css']
})

export class MenubarListComponent {
  @Input() apps: Array<object>;
}
