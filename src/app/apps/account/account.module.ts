import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  declarations: [
   AccountComponent,
   AccountListComponent
  ],
  imports: [

  ],
  exports: [
    AccountComponent,
  ],
  providers: [

  ]
})
export class AccountModule { }
