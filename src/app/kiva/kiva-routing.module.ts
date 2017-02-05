import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KivaSignupComponent } from './kiva-signup.component';
import { KivaLoansComponent } from './kiva-loans.component';
import { KivaLendComponent } from './kiva-lend.component';

const routes: Routes = [
    { path: 'signup', component: KivaSignupComponent },
    { path: 'loans', component: KivaLoansComponent },
    { path: 'lend/:id', component: KivaLendComponent }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class KivaRoutingModule { }
