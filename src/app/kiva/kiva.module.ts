import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { KivaSignupComponent } from './kiva-signup.component';
import { KivaLoansComponent } from './kiva-loans.component';
import { KivaRoutingModule } from './kiva-routing.module';
import { AccountService } from '../account/account.service';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        KivaRoutingModule
    ],
    declarations: [
        KivaSignupComponent,
        KivaLoansComponent
    ],
    providers: [AccountService]
})
export class KivaModule { }
