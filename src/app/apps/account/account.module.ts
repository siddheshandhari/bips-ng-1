import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../shared/card/card.module';
import { AddButtonModule } from '../shared/add-button/add-button.module';
import { FormsModule }   from '@angular/forms';

import { ModalComponent } from '../shared/modal/modal.component';
import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AddAccountComponent } from './add-account/add-account.component';

import { AccountService } from './account.service';


@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent,
    AddAccountComponent,
    ModalComponent
  ],
  imports: [
    CardModule,
    AddButtonModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    AccountComponent,
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
