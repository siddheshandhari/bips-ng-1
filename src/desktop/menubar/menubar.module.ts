import { NgModule } from '@angular/core';

import { MenubarComponent } from './menubar.component';
import { MenubarListComponent } from './menubar-list/menubar-list.component';
import { MenubarItemComponent } from './menubar-list/menubar-item/menubar-item.component';
import { AutoHideDirective } from './autohide.directive';

@NgModule({
  declarations: [
    MenubarComponent,
    MenubarListComponent,
    MenubarItemComponent,
    AutoHideDirective
  ],
  exports: [
    MenubarComponent
  ]
})
export class MenubarModule { }
