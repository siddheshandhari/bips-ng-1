import { NgModule } from '@angular/core';

import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { CardComponent } from './card/card.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { AddButtonModule } from '../shared/add-button/add-button.module';

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    WarehouseListComponent,
    CardComponent,
    AddInventoryComponent,
    InfoDetailsComponent,
  ],
  imports: [
    AddButtonModule,
  ],
  exports: [
    InventoryComponent
  ]

})
export class InventoryModule { }
