import { Component } from '@angular/core';
import { LeadService } from './lead.service';

@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent {
    constructor(public leadService:LeadService){
        this.getLeadList();
    }

    getLeadList(){
        this.leadService.getLeadList()
        .subscribe(
            res => console.log(res)
        )
    }

}
