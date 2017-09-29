import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShowcaseComponent } from '../showcase.component';
import { HttpModule } from '@angular/http';
import { ShowcaseService } from '../showcase.service'
@Component({
    selector: 'showcaselist',
    templateUrl: 'showcaselist.component.html',
    styleUrls: ['showcaselist.component.css']
})
export class ShowcaseListComponent{
    
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