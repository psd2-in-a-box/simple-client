import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AsyncSubject } from 'rxjs/AsyncSubject';

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
    timestamp: number;
    description: string;
    id: string;
}

@Injectable()
export class AccountService {

    readonly ACCOUNTS_URL = BASE_URL + '/accounts';
    customerId: string;
    events: AsyncSubject<Transaction> = new AsyncSubject<Transaction>();

    constructor(private http: HttpClient) {
    }

    setCustomerId(customerId: string): void {
        this.customerId = customerId;
    }

    getAccount(id): Observable<Account> {
        return this.http.get(this.ACCOUNTS_URL + '/' + id)
            .map(response => response.json());
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get(this.ACCOUNTS_URL + '?customer=' + this.customerId)
            .map(response => response.json()._embedded.accounts);
    }

    getTransactions(account: Account): Observable<Transaction[]> {
        return this.http.get(this.ACCOUNTS_URL + '/' + account.regNo + '-' + account.accountNo + '/transactions')
            .map(response => response.json()._embedded.transactions);
    }

    getTransactionEvents(account: Account): Observable<Transaction> {
        return Observable.create(observer => {
            let latest = { timestamp: 0 };
            Observable
                .timer(1, 5000)
                .subscribe(x => {
                    this.getTransactions(account).subscribe(transactions => {
                        transactions.reverse();
                        for (let transaction of transactions) {
                            console.log("tx: " + transaction.timestamp);
                            if (transaction.timestamp > latest.timestamp) {
                                console.log(transaction);
                                observer.next(transaction);
                                latest.timestamp = transaction.timestamp;
                            }
                        }
                    });                    
                });
        });
    }

}
