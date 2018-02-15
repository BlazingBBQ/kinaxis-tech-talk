import { Component, OnInit } from '@angular/core';
import { ClickerSelector } from '../selectors.constants';

@Component({
  selector: ClickerSelector,
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss'],
})
export class ClickerComponent implements OnInit {

    private numClicks: number;

    constructor() {
        this.numClicks = 0;
    }

    ngOnInit() {
    }

    private onClick() {
        this.numClicks++;

        document.querySelector('.clicker-counter').classList.add('animate-active');
        setTimeout(function() {
            document.querySelector('.clicker-counter').classList.remove('animate-active');
        }, 100);
    }
}
