import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KivaSignupComponent } from './kiva-signup.component';
import { KivaLoansComponent } from './kiva-loans.component';

const routes: Routes = [
    { path: 'signup', component: KivaSignupComponent },
    { path: 'loans', component: KivaLoansComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class KivaRoutingModule { }
