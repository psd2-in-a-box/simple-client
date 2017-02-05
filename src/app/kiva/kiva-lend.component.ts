import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { KivaService } from './kiva.service';
import { KivaLoan } from './kiva.service';

@Component({
    selector: 'app-kiva-lend',
    templateUrl: './kiva-lend.component.html',
    styleUrls: ['./kiva-lend.component.scss']
})
export class KivaLendComponent implements OnInit {
    loan: KivaLoan = {description: {texts: {}}} as KivaLoan;    

    constructor(private route: ActivatedRoute, private kivaService: KivaService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap(params => this.kivaService.lend(params['id']))
            .subscribe(loan => {
                this.loan = loan;
            });
    }
}
