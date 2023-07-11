import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';

const routes: Routes = [
  {
    path:'details/:playerId',
    component:PlayerDetailsComponent
  },

  {
    path:'update/:playerId',
    component:UpdatePlayerComponent
  },
  {
    path:'add',
    component:CreateplayerComponent
  },
  {
    path:'list',
    component:PlayerlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
