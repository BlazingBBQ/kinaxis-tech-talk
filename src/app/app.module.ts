import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { BannerComponent } from './banner/banner.component';
import { ClickerComponent } from './clicker/clicker.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BannerComponent,
        ClickerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
