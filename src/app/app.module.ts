import "hammerjs";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AccountModule} from "./account/account.module";
import {WelcomeModule} from "./welcome/welcome.module";
import {KivaModule} from "./kiva/kiva.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        AppRoutingModule,
        AccountModule,
        WelcomeModule,
        KivaModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
