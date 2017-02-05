import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { KIVA_URL } from '../../environments/environment';

export interface KivaLoan {
    id: number;
    name: string;
    use: string;
    image: Image;
    funded_amount: number;
    loan_amount: number;
    locaton: Location;
    description: Description;
}

export interface Image {
    id: number;
}

export interface Location {
    country: string;
}

export interface Description {
    texts: Text;
}

export interface Text {
    en: string;
}

@Injectable()
export class KivaService {
    readonly LOANS_URL = KIVA_URL + 'newest.json';
    readonly LOAN_URL = KIVA_URL;

    constructor(private http: Http) {
    }

    getLoans(): Observable<KivaLoan[]> {
        return this.http.get(this.LOANS_URL)
            .map(response => response.json().loans);
    }

    lend(id: string): Observable<KivaLoan> {
        console.log(this.LOAN_URL + id + '.json');
        return this.http.get(this.LOAN_URL + id + '.json')
            .map(response => response.json().loans[0]);
    }
}
