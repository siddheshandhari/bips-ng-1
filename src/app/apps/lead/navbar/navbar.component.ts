import { Component, OnInit, Input } from '@angular/core';
import { LeadSearchComponent } from '../lead-search/lead-search.component';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    @Input() modalOpen: boolean;
    constructor (){}

    ngOnInit(){}
}