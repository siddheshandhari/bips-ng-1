import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShowcaseComponent } from '../showcase.component';
import { HttpModule } from '@angular/http';
import { ShowcaseService } from '../showcase.service'
import {Product } from '../product';
@Component({
    selector: 'showcase-detail',
    templateUrl: 'showcase-detail.component.html',
    styleUrls: ['showcase-detail.component.css'],
    providers: [ShowcaseService]
})
export class ShowcaseDetailComponent{
    constructor(private showcaseService: ShowcaseService) { }
    @Input() selectedShowcase: Product;
}