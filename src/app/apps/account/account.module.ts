import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import { AddButtonModule } from '../shared/add-button/add-button.module';
import { ModalModule } from '../shared/modal/modal.module';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddCompanyFormModule } from '../shared/forms/add-company-form/add-company-form.module';

import { AccountService } from './account.service';


@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent,
    AddAccountComponent,
  ],
  imports: [
    CommonModule,
    AddButtonModule,
    FormsModule,
    AddCompanyFormModule,
    ModalModule
  ],
  exports: [
    AccountComponent,
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
