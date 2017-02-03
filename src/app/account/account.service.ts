import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './http-client';

export interface Account {
    accountNo: string;
    name: string;
    regNo: string;
    balance: number;
}

@Injectable()
export class AccountService {

    readonly URL = ' http://localhost:7001/sample/accounts/5479-7654321';

    constructor(private http: HttpClient) {
    }

    getAccount(): Observable<Account> {
        return this.http.get(this.URL)
            .map(response => response.json());
    }

}
