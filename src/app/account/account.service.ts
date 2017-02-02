import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface Account {
    accountNumber: number;
    balance: number;
    accountStatus: string;
    creditMax: number;
}

@Injectable()
export class AccountService {

    readonly URL = 'http://api.futurefinance.io/api/accounts/4574000000';

    constructor(private http: Http) {
    }

    getAccount(): Observable<Account> {
        let headers = new Headers({ Authorization: 'Basic ' + btoa('user099:TSuNHAWuHYwH') });
        return this.http.get(this.URL, { headers: headers })
            .map(response => response.json());
    }

}
