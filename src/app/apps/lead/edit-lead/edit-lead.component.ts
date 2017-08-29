import { Component, OnInit } from  '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }  from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Lead } from './../lead';
import { LeadService } from './../lead.service';

@Component({
    selector: 'edit-lead',
    templateUrl: 'edit-lead.component.html',
    styleUrls: ['edit-lead.component.css']

})

export class EditLeadComponent implements OnInit{
    lead: Lead;

    constructor(
        private leadService: LeadService,
        private route: ActivatedRoute,
        private location: Location
        ){}

    ngOnInit(): void{
        this.route.paramMap
        .switchMap((params: ParamMap) => this.leadService.getLead(+ params.get('id')))
        .subscribe(lead =>this.lead = lead);
    }

    save(): void{
        
    }

    goBack(): void{
        this.location.back();
    }
    
}