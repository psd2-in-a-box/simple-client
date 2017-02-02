import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';
import { HttpClient } from './http-client';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        AccountRoutingModule
    ],
    declarations: [AccountComponent],
    providers: [AccountService, HttpClient]
})
export class AccountModule { }
