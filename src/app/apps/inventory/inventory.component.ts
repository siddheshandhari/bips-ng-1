import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventory',
  templateUrl: 'inventory.component.html',
  styleUrls: ['inventory.component.css'],
})

export class InventoryComponent implements OnInit{
  modalOpen: boolean = false;
  addInventoryValue: boolean = false;

  constructor() {}

  ngOnInit (){}

  addInventory() {
    this.addInventoryValue = true;
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
