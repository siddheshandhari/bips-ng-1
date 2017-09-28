import { Component, OnInit, Input }  from '@angular/core';
import { Potential } from '../potential';

@Component({
    selector:'potential-sidebar',
    templateUrl:'potential-sidebar.component.html',
    styleUrls:['potential-sidebar.component.css']
})

export class PotentialSidebarComponent implements OnInit{

    @Input() selectedPotential: Potential;
    
    note: Boolean= true;
    invoice: Boolean= false;
    todo: Boolean = false;
    warehouse:Boolean= false;
    expense:Boolean= false;
    others: Boolean= false;

    constructor(){}
    ngOnInit(){}

    showNote(){
        this.note = true;
        this.invoice = false;
        this.todo = false;
        this.warehouse = false;
        this.expense = false;
        this.others = false;
    }

    showInvoice(){
        this.note = false;
        this.todo = false;
        this.warehouse = false;
        this.expense = false;
        this.others = false;
        this.invoice = true;
        
    }

    showTodo(){
        this.note = false;
        this.warehouse = false;
        this.expense = false;
        this.others = false;
        this.invoice = false;
        this.todo = true;

    }
    showWarehouse(){
        this.note = false;
        this.expense = false;
        this.others = false;
        this.invoice = false;
        this.todo = false;
        this.warehouse = true;

    }

    showExpense(){
        this.note = false;
        this.others = false;
        this.invoice = false;
        this.todo = false;
        this.warehouse = false;
        this.expense = true;

    }
    showOthers(){
        this.note = false;
        this.others = false;
        this.invoice = false;
        this.todo = false;
        this.warehouse = false;
        this.expense = false;
        this.others = true;

    }

}