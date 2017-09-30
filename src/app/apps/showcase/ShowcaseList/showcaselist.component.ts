import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShowcaseComponent } from '../showcase.component';
import { HttpModule } from '@angular/http';
import { ShowcaseService } from '../showcase.service'
import {Product } from '../product';
@Component({
    selector: 'showcaselist',
    templateUrl: 'showcaselist.component.html',
    styleUrls: ['showcaselist.component.css'],
    providers: [ShowcaseService]
})
export class ShowcaseListComponent implements OnInit{
    constructor(private showcaseService: ShowcaseService) { }
    // heroes: Product[]=[];
    showcases: Product[];
    getShowcases(): void {
        this.showcaseService.getShowcaselist().subscribe(res => {
            this.showcases = res;
          })
      }
      ngOnInit(): void {
        this.getShowcases();
      }
    
}