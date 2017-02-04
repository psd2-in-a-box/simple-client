import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";

@Component({
    selector: 'app-kiva-loans',
    templateUrl: './kiva-loans.component.html',
    styleUrls: ['./kiva-loans.component.scss']
})
export class KivaLoansComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    changeRoute(link: string): void {
        let links: Array<string> = [link];
        this.router.navigate(links);
    }

}
