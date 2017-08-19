import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'add-lead',
    templateUrl: 'add-lead.component.html',
    styleUrls: ['add-lead.component.css'],

})

export class AddLeadComponent implements OnInit{

    tires = ['none','1(100-500 cases)','2(500-2500cases)','3(2500-5000cases)',
                '4(5000-10000cases)','5(10000-25000cases)'

    ];

    constructor(private http: HttpClient ){

    }

    ngOnInit(){ }

    onSubmit(addleadForm){
       event.preventDefault();
       const req = this.http.post('http://jsonplaceholder.typicode.com/posts',{
            addleadForm
        })
        .subscribe(
                    res =>{
                        console.log(JSON.stringify(res));
                        },
                    err =>{
                        console.log("error occored");
                    }
                 )

         console.log(JSON.stringify(addleadForm));     
    }

}
