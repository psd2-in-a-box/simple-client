import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './http-client';

export interface Account {
    accountNumber: number;
    balance: number;
    accountStatus: string;
    creditMax: number;
}

@Injectable()
export class AccountService {

    readonly URL = 'http://api.futurefinance.io/api/accounts/4574000000';

    constructor(private http: HttpClient) {
    }

    getAccount(): Observable<Account> {
        return this.http.get(this.URL)
            .map(response => response.json());
    }

}
