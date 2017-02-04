import { Component } from '@angular/core';

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
        {icon: 'account_balance', title: 'Account'},
        {icon: 'monetization_on', title: 'Transactions'},
        {icon: 'directions_bike', title: 'other content'},
    ];
}
