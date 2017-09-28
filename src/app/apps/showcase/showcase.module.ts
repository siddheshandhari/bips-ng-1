import { NgModule } from '@angular/core';

import { ShowcaseComponent } from './showcase.component';
import { ShowcaseListComponent } from './showcaselist/showcaselist.component';
import { ShowcaseHeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    ShowcaseComponent,
    ShowcaseHeaderComponent,
    ShowcaseListComponent
  
  ],
  imports: [

  ],
  exports: [
    ShowcaseComponent,
  ],
  providers: [
    
   ],

})
export class ShowcaseModule { }
