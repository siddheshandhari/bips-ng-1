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
    // @Output() isSearching :Boolean=false;

    constructor(private searchbarService:SearchbarService){}

    // searchLead(value){
    //     console.log(value);
    //     this.searchbarService.searchLead(value)
    //   .subscribe(res => {
    //     this.searchlist = res;
    //   })

    //   console.log(this.searchlist);
    //   this.isSearching = true;
    //   console.log(this.isSearching);
    // }
    
}