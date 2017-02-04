import { Component, OnInit } from '@angular/core';

import { Account, AccountService } from '../account/account.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-kiva-signup',
    templateUrl: './kiva-signup.component.html',
    styleUrls: ['./kiva-signup.component.scss']
})
export class KivaSignupComponent implements OnInit {

    accounts: Account[] = [];

    constructor(private accountService: AccountService, private router: Router) {
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

}
