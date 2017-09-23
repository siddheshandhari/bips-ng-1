import { Component,HostBinding } from '@angular/core';


@Component({
    selector: 'card-body',
    templateUrl:'./card-body.component.html',
    styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent{

    @HostBinding('class.open-lead') leadIsOpen: boolean = false;
    closeHeader(){
        this.leadIsOpen = false;
        console.log(this.leadIsOpen);
    }
    
    openHeader(){
        this.leadIsOpen = true;
    }
}