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

@Injectable()
export class AccountService {

    readonly ACCOUNTS_URL = BASE_URL + '/accounts';
    readonly ACCOUNT_URL = this.ACCOUNTS_URL + '/5479-7654321';

    constructor(private http: HttpClient) {
    }

    getAccount(): Observable<Account> {
        return this.http.get(this.ACCOUNT_URL)
            .map(response => response.json());
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get(this.ACCOUNTS_URL)
            .map(response => response.json()._embedded.accounts);
    }

}
