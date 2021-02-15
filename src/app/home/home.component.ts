import { Component } from '@angular/core';
import { WebexService } from "../webex.service";

@Component({ templateUrl: 'home.component.html' })


export class HomeComponent {
    constructor(private webex: WebexService) {}

    onLogout() {
        this.webex.onLogout()
      }
}