import { Component, OnInit } from '@angular/core';
import { BannerSelector } from "../selectors.constants";

@Component({
    selector: BannerSelector,
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    private bannerText: string;

    constructor() {
        this.bannerText = "Hello World";
    }

    ngOnInit() {
    }

}
