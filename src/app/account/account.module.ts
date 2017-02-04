import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';
import { HttpClient } from './http-client';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        AccountRoutingModule
    ],
    declarations: [
        AccountComponent,
        AccountListComponent
    ],
    providers: [AccountService, HttpClient]
})
export class AccountModule { }
