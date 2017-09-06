//module
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';

//

import { LeadRoutingModule } from './lead-routing.module';
// import { CardModule } from '../shared/card/card.module';
// import { ModalComponent } from '../shared/modal/modal.component';
import { CardModule } from '../shared/leadcard/card.module';
import { LeadComponent } from './lead.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { EditLeadComponent } from './edit-lead/edit-lead.component';
import { LeadService } from './lead.service';
import { LeadSearchComponent } from './lead-search/lead-search.component';
import { LeadInfoComponent } from './lead-info/lead-info.component';
import { LeadListComponent } from './lead-list/lead-list.component'; 
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
   LeadComponent,
   AddLeadComponent,
   EditLeadComponent,
   LeadSearchComponent,
   LeadInfoComponent,
   LeadListComponent,
   NavbarComponent,
  //  ModalComponent


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    HttpModule,
    CardModule,
    CommonModule,
    LeadRoutingModule,



  ],
  exports: [
    LeadComponent,
    HttpClientModule,
  ],
  providers: [

    LeadService 

  ]


})
export class LeadModule { }
