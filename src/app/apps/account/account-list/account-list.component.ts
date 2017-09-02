import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: "account-list",
  templateUrl: "account-list.component.html",
  styleUrls: ["account-list.component.css"]
})

export class AccountListComponent implements OnInit {
  public accountList: Array<Account> = [];
  constructor( public accountService: AccountService){}

  ngOnInit(){
    this.accountService.getAccountList().subscribe(
      res => {
        this.accountList = res;
      },
      error => {
        console.log(error)
      }
    );
  }


}
