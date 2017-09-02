import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountService } from './account.service';
import { CardModule } from '../shared/card/card.module';
import { AddButtonModule } from '../shared/add-button/add-button.module';

@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent
  ],
  imports: [
    CardModule,
    AddButtonModule
  ],
  exports: [
    AccountComponent,
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
