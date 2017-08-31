import { Component, OnInit, Input } from  '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";
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
     @Input() lead:Lead;
    

    constructor(
        private http: HttpClient,
        private leadService: LeadService,
        private route: ActivatedRoute,
        private location: Location
        ){}

    ngOnInit(): void{
        // this.route.paramMap
        // .switchMap((params: ParamMap) => this.leadService.getLead(+ params.get('id')))
        // .subscribe(lead =>this.lead = lead);
    }

    save(lead:Lead): void{
    //    event.preventDefault();
       console.log(JSON.stringify(this.lead));
       this.leadService.save(this.lead)
       .subscribe(
                    res =>{
                        console.log(JSON.stringify(res));
                        },
                    err =>{
                        console.log("error occored");
                    }
                 )
       
    
    }


    
}