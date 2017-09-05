import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators,FormArray } from '@angular/forms'
import { HttpClient } from "@angular/common/http";

import { Lead } from '../lead';
import { LeadService } from '../lead.service';



@Component({
    selector: 'add-lead',
    templateUrl: './add-lead.component.html',
    styleUrls: ['./add-lead.component.css'],

})

export class AddLeadComponent implements OnInit{

    public myForm: FormGroup;
    leadlist : Lead[] = [];
    selectedLead : Lead;

    constructor(
        private http: HttpClient,
        private _formBuilder: FormBuilder,
        private leadService: LeadService,
      ){}


    ngOnInit(){
        this.getLeadlist();
        this.myForm = this._formBuilder.group({
            lead_status: [''],
            lead_source:[''],

            company :this._formBuilder.group({
                    name: [''],
                    tier:[''],
                    website: [''],
                    rating:[''],
                    annual_revenue:[''],
                    employees:[''],
                    industry:[''],
                    shipping_address:  this.initAddress(),
                    billing_address:  this.initAddress(),

                    contacts: this._formBuilder.array([
                                this.initContact(),
                            ])
                            

                 }),
                   
            // contacts: this._formBuilder.array([
            //     this.initContact(),
            // ])


        });

     }

    public initContact(){
         return this._formBuilder.group({
                first_name:[''],
                last_name:[''],
                contact_owner:[''],
                email:[''],
                phone:['']
            })

     }

    public initAddress(){
         return this._formBuilder.group({
                    street:[''],
                    city:[''],
                    state:[''],
                    zip_code:[''],
                    country:[''],
            },
            )

     }

    getLeadlist():void{
          this.leadService.getLeadlist()
          .subscribe(leadlist => this.leadlist = leadlist)
    }

    addContact(){
         const control = <FormArray>this.myForm.controls.controls['contacts'];
         control.push(this.initContact());
     }

    removeContact(i: number){
         const control = <FormArray>this.myForm.controls.controls['contacts'];
         control.removeAt(i);
     }

    onSubmit({value}:{value:Lead},model: Lead){
       event.preventDefault();
       if(!value){ return };
    
       console.log(JSON.stringify(value));
       this.leadService.createLead(value)
        // const req = this.http.post('http://192.168.50.25/api/v1/lead',value)
        .subscribe(
                       
         

                    res =>{
                        this.leadlist.push(res);
                        console.log(JSON.stringify(res));
                        
                        },
                    err =>{
                        console.log("error occured");
                    }
                 )
         this.myForm.reset();
    
          }
          

}


