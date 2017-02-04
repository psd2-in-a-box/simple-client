import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BASE_URL } from '../../environments/environment';
import { HttpClient } from './http-client';

export interface Account {
    accountNo: string;
    name: string;
    regNo: string;
    balance: number;
}

export interface Transaction {
    amount: number;
    description: string;
    id: string;
}

@Injectable()
export class AccountService {

    readonly ACCOUNTS_URL = BASE_URL + '/accounts';

    constructor(private http: HttpClient) {
    }

    getAccount(id): Observable<Account> {
        return this.http.get(this.ACCOUNTS_URL + '/' + id)
            .map(response => response.json());
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get(this.ACCOUNTS_URL)
            .map(response => response.json()._embedded.accounts);
    }

    getTransactions(account: Account): Observable<Transaction[]> {
        return this.http.get(this.ACCOUNTS_URL + '/' + account.regNo + '-' + account.accountNo + '/transactions')
            .map(response => response.json()._embedded.transactions);
    }

}
