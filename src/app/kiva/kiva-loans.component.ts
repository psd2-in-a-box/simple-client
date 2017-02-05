import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { KivaService } from './kiva.service';
import { KivaLoan } from './kiva.service';

@Component({
    selector: 'app-kiva-loans',
    templateUrl: './kiva-loans.component.html',
    styleUrls: ['./kiva-loans.component.scss']
})
export class KivaLoansComponent implements OnInit {
    loans: KivaLoan[];    

    constructor(private kivaService: KivaService, private router: Router) {
    }

    ngOnInit() {
        this.kivaService.getLoans()
            .subscribe(loans => this.loans = loans);
    }

    changeRoute(link: string): void {
        let links: Array<string> = [link];
        this.router.navigate(links);
    }
}
