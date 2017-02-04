import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdSidenav} from "@angular/material";


export interface MenuItem {
    icon: string;
    title: string;
    link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    readonly menuItems: Array<MenuItem> = [
        {icon: 'account_balance', title: 'Accounts', link: '/accounts'},
        {icon: 'monetization_on', title: 'Transactions', link: ''},
        {icon: 'directions_bike', title: 'other content', link: ''},
    ];

    @ViewChild(MdSidenav) sidenav: MdSidenav;

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

    changeRoute(link: string): void {
        let links: Array<string> = [link];
        this.router.navigate(links);
        this.closeSidenav();
    }

    private closeSidenav(): void {
       this.sidenav.close();
    }

}
