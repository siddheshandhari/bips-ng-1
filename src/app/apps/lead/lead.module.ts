//module
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';
import { ModalModule } from '../shared/modal/modal.module';

//


// import { CardModule } from '../shared/card/card.module';
import { ModalComponent } from '../shared/modal/modal.component';
// import { CardModule } from '../shared/leadcard/card.module';
import { LeadComponent } from './lead.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { LeadService } from './lead.service';
import { CardComponent } from './card/card.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardContentComponent } from './card/card-body/card-content/card-content.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { NoteComponent } from './info-details/note/note.component';
import { SearchbarService } from './navbar/searchbar/searchbar.service';
import { LeadSearchService } from './lead-list/leadsearch.service';

import { LeadInfoComponent } from './lead-info/lead-info.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { SearchbarComponent } from './navbar/searchbar/searchbar.component';
import { AddButtonModule } from '../shared/add-button/add-button.module';



@NgModule({
  declarations: [
   LeadComponent,
   AddLeadComponent,
   LeadInfoComponent,
   LeadListComponent,
   SearchbarComponent,
   CardComponent,
   CardBodyComponent,
   CardContentComponent,
   InfoDetailsComponent,
   NoteComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    HttpModule,
    // CardModule,
    CommonModule,
    AddButtonModule,
    ModalModule
  ],
  exports: [
    LeadComponent,
    HttpClientModule,
  ],
  providers: [

    LeadService,
    SearchbarService,
    LeadSearchService,


  ]


})
export class LeadModule { }
