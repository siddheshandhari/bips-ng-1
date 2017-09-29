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
    heroes: Product[];
    getHeroes(): void {
        this.showcaseService.getLeadlist().subscribe(res => {
            this.heroes = res;
          })
        console.log("lead");
        console.log(this.heroes);
      }
      ngOnInit(): void {
        this.getHeroes();
      }
    //   results: string[];
     
    //   // Inject HttpClient into your component or service.
    //   constructor(private http: HttpClient) {}
     
    //   ngOnInit(): void {
    //     // Make the HTTP request:
    //     this.http.get('/api/items').subscribe(data => {
    //       // Read the result field from the JSON response.
    //       this.results = data['results'];
    //     });
    //   }
    
}