import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Account, AccountService, Transaction } from './account.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    account: Account = {} as Account;
    transactions: Transaction[] = [];

    constructor(private route: ActivatedRoute, private accountService: AccountService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap(params => this.accountService.getAccount(params['id']))
            .subscribe(account => {
                this.account = account;
                this.accountService.getTransactions(account)
                    .subscribe(transactions => this.transactions = transactions);
            });
    }

    isNegative(amount: string): boolean {
        return Number(amount).valueOf() < 0;
    }
}
