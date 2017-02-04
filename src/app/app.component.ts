import { Component } from '@angular/core';
import {Router} from '@angular/router';

export interface MenuItem {
    icon: string;
    title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    readonly menuItems: Array<MenuItem> = [
        {icon: 'account_balance', title: 'Accounts'},
        {icon: 'monetization_on', title: 'Transactions'},
        {icon: 'directions_bike', title: 'other content'},
    ];

    constructor(private router: Router) {
    }

    getNavigationTitle(): string {
        let title = this.router.url;
        for (let menuItem of this.menuItems) {
            if (title.indexOf(menuItem.title.toLowerCase()) > -1) {
                return menuItem.title;
            }
        }
        return 'Welcome';
    };
}
