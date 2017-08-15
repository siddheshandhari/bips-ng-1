import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarComponent } from './menubar.component';
import { MenubarListComponent } from './menubar-list/menubar-list.component';
import { MenubarItemComponent } from './menubar-list/menubar-item/menubar-item.component';

@NgModule({
  declarations: [
    MenubarComponent,
    MenubarListComponent,
    MenubarItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenubarComponent
  ]
})
export class MenubarModule { }
