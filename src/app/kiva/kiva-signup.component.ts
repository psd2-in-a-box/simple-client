import { Component, OnInit } from '@angular/core';

import { Account, AccountService } from '../account/account.service';
import { KivaForecastService } from './kiva-forecast.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-kiva-signup',
    templateUrl: './kiva-signup.component.html',
    styleUrls: ['./kiva-signup.component.scss']
})
export class KivaSignupComponent implements OnInit {

    accounts: Account[] = [];
    forecast: number = 0;

    constructor(private accountService: AccountService, private forecastService: KivaForecastService, private router: Router) {
    }

    ngOnInit() {
        this.accountService.getAccounts()
            .subscribe(accounts => {
                this.accounts = accounts;
            });
    }

    changeRoute(link: string): void {
        let links: Array<string> = [link];
        this.router.navigate(links);
    }

    select(account: Account): void {
        this.forecastService.getForecast(account)
            .subscribe(forecast => {
                this.forecast = forecast;
            });
    }

}
