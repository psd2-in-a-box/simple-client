import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdSidenav} from "@angular/material";
import {AccountService} from "./account/account.service";


export interface MenuItem {
    icon: string;
    title: string;
    link: string;
}

export interface Customer {
    name: string;
    id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    readonly menuItems: Array<MenuItem> = [
        {icon: 'credit_card', title: 'Accounts', link: '/accounts'},
        {icon: 'monetization_on', title: 'Transactions', link: ''},
        {icon: 'directions_bike', title: 'other content', link: ''},
    ];

    readonly customers: Array<Customer> = [
        {name: 'Jens Peter Knudsen', id: '2412820009'},
        {name: 'Peter Jensen', id: '2412820007'},
        {name: 'Adam Pedersen', id: '2412820008'},
        {name: 'Ida Camille Madsen', id: '2412820037'}
    ];

    @ViewChild(MdSidenav) sidenav: MdSidenav;

    constructor(private router: Router, private accountService: AccountService) {
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

    changeRoute(link: string): void {
        let links: Array<string> = [link];
        this.router.navigate(links);
        this.closeSidenav();
    }

    chooseCustomer(selectedCustomerId): void {
        this.accountService.setCustomerId(selectedCustomerId);
        this.changeRoute('');
    }

    private closeSidenav(): void {
       this.sidenav.close();
    }

}
