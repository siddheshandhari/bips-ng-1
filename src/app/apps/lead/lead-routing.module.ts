import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddLeadComponent } from './add-lead/add-lead.component';

const routes: Routes = [
    { path : 'desktop/add-lead', component: AddLeadComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class LeadRoutingModule {}
