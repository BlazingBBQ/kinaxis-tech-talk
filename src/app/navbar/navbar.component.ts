import { Component, OnInit } from '@angular/core';
import { NavBarSelector } from "../selectors.constants";

@Component({
    selector: NavBarSelector,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    private navButtons: NavButton[];
    private login: NavButton;
    private signup: NavButton;

    constructor() {
        this.navButtons = [
            {
                name: "Home",
                route: "/",
            },
            {
                name: "Gallery",
                route: "/gallery",
            },
            {
                name: "About",
                route: "/about",
            },
            {
                name: "Contact",
                route: "/contact",
            },
        ];
        
        this.login = {
            name: "Login",
            route: "/login"
        }

        this.signup = {
            name: "Sign Up",
            route: "/signup"
        }
    }

    ngOnInit() {
    }

}

class NavButton {
    name: string;
    route: string;
}
