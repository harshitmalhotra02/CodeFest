import { Component, OnInit } from "@angular/core";
import { WebexService } from "../webex.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit{
  roomId: string;
  member: string;
  email: string;

  constructor(private webex: WebexService,private router: Router) {}

  ngOnInit(): void {
    this.webex.onInit()
  }

  async newMember(roomId: string,email: string): Promise<any> {
    console.log(roomId,email);
    const member = await this.webex.createMember(roomId, email)
    return member;
  }

  async sendMeHome() {
    this.router.navigate(['home']);
  }

  onLogout() {
    this.webex.onLogout()
  }

}
