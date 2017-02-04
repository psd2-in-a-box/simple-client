import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';

const routes: Routes = [
    { path: 'accounts', component: AccountListComponent },
    { path: 'account', component: AccountComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AccountRoutingModule { }
