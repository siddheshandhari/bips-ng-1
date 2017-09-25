import { Component, Output } from '@angular/core';
import { SearchbarService } from './searchbar.service';
import { Lead } from '../../lead';

@Component ({
    selector:'searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent {
    @Output() searchlist: Lead[] = [];

    constructor(private searchbarService:SearchbarService){}

}