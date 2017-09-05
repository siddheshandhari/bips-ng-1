import { Component } from '@angular/core';

@Component({
  selector: "account",
  templateUrl: "account.component.html",
  styleUrls: ["account.component.css"]
})

export class AccountComponent {
  modalOpen: boolean = false;

  openModal(){
    this.modalOpen = true;
  }

  closeModal(){
    this.modalOpen = false;
  }
}
