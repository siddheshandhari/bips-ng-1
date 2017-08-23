import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account.model';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['account.component.css']
})

export class AccountComponent implements OnInit{
  accountList: Account[] = [];
  constructor(public accountService: AccountService){
  }

  ngOnInit(){
    this.getAccountList();
  }

  getAccountList(){
    this.accountService.getAll()
      .subscribe(
        accountList => {
          this.accountList = accountList;
        }
      );
  }
}
