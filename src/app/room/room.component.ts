import { Component, OnInit } from "@angular/core";
import { WebexService } from "../webex.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})

export class RoomComponent implements OnInit{
  roomName: string;
  rooms: string;

  constructor(private webex: WebexService,private router: Router) {}

  ngOnInit(): void {
    this.webex.onInit()
  }

  onCreateRoom() {
    if(this.roomName) {
      this.webex.onCreateRoom(this.roomName)
    }
  }

  listRooms() {
    this.webex.onListRoom().then((rooms) => {
      console.log(rooms)
    })
  }

  onLogout() {
    this.webex.onLogout()
  }

  async sendMeHome() {
    this.router.navigate(['home']);
  }
}
