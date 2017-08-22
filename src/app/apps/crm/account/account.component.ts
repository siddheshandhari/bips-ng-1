import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['account.component.css']
})

export class AccountComponent{
  constructor(public accountService: AccountService){
    this.getAccountList();
  }

  getAccountList(){
    this.accountService.getAccountList();
  }
}
