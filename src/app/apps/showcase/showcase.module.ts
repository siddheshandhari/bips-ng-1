import { NgModule } from '@angular/core';

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
      HttpClientModule
  ],
  exports: [
    ShowcaseComponent,
  ],
  providers: [
    
   ],

})
export class ShowcaseModule { }
