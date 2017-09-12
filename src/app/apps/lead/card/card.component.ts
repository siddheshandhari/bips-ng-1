import { Component } from '@angular/core';
import { LeadService } from '../lead.service';
import { Lead } from '../lead';

@Component({
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls:['card.component.css']
})

export class CardComponent {
    leadlist : Lead[] = [];

    constructor( private leadService: LeadService){}
    ngOnInit(){}

    getLeadlist():void{
      this.leadService.getLeadlist()
      .subscribe(res => {
        this.leadlist = res;
      })
    }
    
}

