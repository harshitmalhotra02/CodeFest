import { Component, OnInit } from "@angular/core";
import { WebexService } from "../webex.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})

export class TeamComponent implements OnInit{
  teamName: string;
  teams: string;

  constructor(private webex: WebexService,private router: Router) {}

  ngOnInit(): void {
    this.webex.onInit()
  }

  onCreateTeam() {
    if(this.teamName) {
      this.webex.onCreateTeam(this.teamName)
    }
  }

  listTeams() {
    this.webex.onListTeam().then((teams) => {
      console.log(teams)
    })
  }

  onLogout() {
    this.webex.onLogout()
  }

  async sendMeHome() {
    this.router.navigate(['home']);
  }
}
