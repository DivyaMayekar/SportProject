import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateplayerComponent,
    PlayerlistComponent,
    PlayerDetailsComponent,
    UpdatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
