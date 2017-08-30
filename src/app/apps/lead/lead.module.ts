//module
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";



//
// import { CardModule } from '../shared/card/card.module';
import { CardModule } from './card/card.module';
import { LeadComponent } from './lead.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { EditLeadComponent } from './edit-lead/edit-lead.component';
import { LeadService } from './lead.service';


@NgModule({
  declarations: [
   LeadComponent,
   AddLeadComponent,
   EditLeadComponent


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    HttpModule,
    CardModule,


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
