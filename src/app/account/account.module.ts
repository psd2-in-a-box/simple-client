import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        AccountRoutingModule
    ],
    declarations: [AccountComponent],
    providers: [AccountService]
})
export class AccountModule { }
