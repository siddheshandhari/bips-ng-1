import { NgModule } from '@angular/core';

import { MenubarComponent } from './menubar.component';
import { MenubarListComponent } from './menubarList/menubarList.component';
import { MenubarItemComponent } from './menubarList/menubarItem/menubarItem.component';

@NgModule({
  declarations: [
    MenubarComponent,
    MenubarListComponent,
    MenubarItemComponent
  ],
  exports: [
    MenubarComponent,
  ]
})
export class MenubarModule { }
