import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { PlayerserviceService } from '../playerservice.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent {

  playerId:number=0;
  player:Player = new Player()
  constructor(private route: ActivatedRoute , private router :Router , private service :PlayerserviceService){}

  ngOnInit()
  {
    this.player = new Player();

    this.playerId = this.route.snapshot.params['playerId'];

    this.service.getOnePlayer(this.playerId).subscribe((data)=>
    {
      console.log(data);
      this.player=data;
    })
  
  }

  list()
  {
    this.router.navigate(['list']);
  }

}
