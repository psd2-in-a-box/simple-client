import 'rxjs/add/operator/scan';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Account, AccountService } from '../account/account.service';

@Injectable()
export class KivaForecastService {

    constructor(private accountService: AccountService) {
    }

    getForecast(account: Account): Observable<number> {
        return this.accountService.getTransactionEvents(account)
            .map(transaction => Number(transaction.amount))
            .filter(amount => amount > 0)
            .map(amount => Math.ceil(amount) - amount)
            .scan((total, amount) => total + amount, 0);
    }

}