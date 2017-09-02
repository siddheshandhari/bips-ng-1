import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../shared/card/card.module';
import { AddButtonModule } from '../shared/add-button/add-button.module';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list/account-list.component';

import { AccountService } from './account.service';


@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent,
  ],
  imports: [
    CardModule,
    AddButtonModule,
    CommonModule,
  ],
  exports: [
    AccountComponent,
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
