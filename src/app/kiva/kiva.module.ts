import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { KivaSignupComponent } from './kiva-signup.component';
import { KivaLoansComponent } from './kiva-loans.component';
import { KivaLendComponent } from './kiva-lend.component';
import { KivaRoutingModule } from './kiva-routing.module';
import { KivaForecastService } from './kiva-forecast.service';
import { AccountService } from '../account/account.service';
import { KivaService } from './kiva.service';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        KivaRoutingModule
    ],
    declarations: [
        KivaSignupComponent,
        KivaLoansComponent,
        KivaLendComponent
    ],
    providers: [AccountService, KivaService, KivaForecastService]
})
export class KivaModule { }
