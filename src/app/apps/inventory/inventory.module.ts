import { NgModule } from '@angular/core';

import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryListComponent,
  ],
  exports: [
    InventoryComponent
  ]

})
export class InventoryModule { }
