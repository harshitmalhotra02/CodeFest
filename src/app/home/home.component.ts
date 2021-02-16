import { Component } from '@angular/core';
import { WebexService } from "../webex.service";

@Component({ templateUrl: 'home.component.html' })


export class HomeComponent {
    constructor(private webex: WebexService) {}

    ngOnInit(): void {
      console.log("Inside Home!!!");
      if(localStorage.getItem("webex_token") === null) {
        this.webex.onBeforeLogin();
      }
    }
    onLogin() {
      this.webex.onLogin()
    }

    onLogout() {
        this.webex.onLogout()
      }
}