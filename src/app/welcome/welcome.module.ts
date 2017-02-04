import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import {WelcomeComponent} from "./welcome.component";
import {WelcomeRoutingModule} from "./welcome-routing.module";

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        WelcomeRoutingModule
    ],
    declarations: [
        WelcomeComponent
    ],
    providers: []
})
export class WelcomeModule { }
