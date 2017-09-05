import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})

export class ModalComponent{
  @Output() requestCloseModal = new EventEmitter();

  closeModal(){
    this.requestCloseModal.emit();
  }

}
