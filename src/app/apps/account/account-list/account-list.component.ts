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
  public accountListCol1: Array<Account> = [];
  public accountListCol2: Array<Account> = [];
  public accountListCol3: Array<Account> = [];
  public itemsPerCol: number;
  constructor( public accountService: AccountService){}

  ngOnInit(){
    this.accountService.getAccountList().subscribe(
      res => {
        this.accountList = res;
        this.itemsPerCol = Math.floor(this.accountList.length / 3);
        this.accountListCol1 = this.accountList.slice(0, this.itemsPerCol);
        this.accountListCol2 = this.accountList.slice(this.itemsPerCol, this.itemsPerCol * 2);
        this.accountListCol3 = this.accountList.slice(this.itemsPerCol * 2);
      },
      error => {
        console.log(error)
      }
    );
  }

  deleteCard(id){

  }




}
