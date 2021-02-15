import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RoomComponent } from './room/room.component';
import { TeamComponent } from './teams/team.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rooms',
    component: RoomComponent
  }
  ,
  {
    path: 'teams',
    component: TeamComponent
  }
  ,
  {
    path: 'message',
    component: NewMessageComponent
  }
  ,
  {
    path: 'member',
    component: NewMemberComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
