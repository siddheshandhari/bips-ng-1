import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ShowcaseComponent } from './showcase.component';
import { ShowcaseListComponent } from './ShowcaseList/showcaselist.component';
import { ShowcaseHeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    ShowcaseComponent,
    ShowcaseHeaderComponent,
    ShowcaseListComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule
  ],
  exports: [
    ShowcaseComponent,
  ],
  providers: [
    
   ],

})
export class ShowcaseModule { }
