import { Component, OnInit } from "@angular/core";
import { WebexService } from "../webex.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit{
  roomId: string;
  message: string;
  text: string;

  constructor(private webex: WebexService,private router: Router) {}

  ngOnInit(): void {
    this.webex.onInit()
  }

  async newMessage(roomId: string,text: string): Promise<any> {
    console.log(roomId,text);
    const message = await this.webex.createMessage(roomId, text)
    return message;
  }

  onLogout() {
    this.webex.onLogout()
  }

  async sendMeHome() {
    this.router.navigate(['home']);
  }

}
