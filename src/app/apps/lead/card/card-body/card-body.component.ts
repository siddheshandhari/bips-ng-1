import { Component,HostBinding,ViewChild, ElementRef } from '@angular/core';


@Component({
    selector: 'card-body',
    templateUrl:'./card-body.component.html',
    styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent{

    @HostBinding('class.open-lead') leadIsOpen: boolean = false;
    @ViewChild('panel',{read:ElementRef}) public panel: ElementRef;
    isScrolling:Boolean= false;

    closeHeader():void{
        this.isScrolling = false;
        this.panel.nativeElement.scrollTop = -100;
        this.leadIsOpen = false;
        console.log(this.leadIsOpen);

    }
    
    openHeader():void{
        this.isScrolling = true;
        // this.panel.nativeElement.scrollTop = 20;
        this.leadIsOpen = true;
    }
}