import { Component, OnInit } from '@angular/core';

import { Account, AccountService } from './account.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountListComponent implements OnInit {

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
