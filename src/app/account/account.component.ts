import { Component, OnInit } from '@angular/core';

import { Account, AccountService } from './account.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    account: Account = {} as Account;

    constructor(private accountService: AccountService) {
    }

    ngOnInit() {
        this.accountService.getAccount()
            .subscribe(account => {
                this.account = account;
            });
    }

}
