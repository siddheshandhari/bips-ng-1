import { Component ,HostBinding} from '@angular/core';


@Component({
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls:['card.component.css']
})

export class CardComponent {
    @HostBinding('class.lead-open') leadIsOpen: boolean = false;

    toggleLead(){
        if(this.leadIsOpen == false){
            this.leadIsOpen = true;
        }
        else{
            this.leadIsOpen = false;
        }
    }

}

