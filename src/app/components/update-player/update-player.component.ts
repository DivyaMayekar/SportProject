import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { PlayerserviceService } from '../playerservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent {

 playerId: number=0;
  player: Player=new Player();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: PlayerserviceService) { }

  ngOnInit() : void {
    this.player = new Player();

    this. playerId = this.route.snapshot.params['playerId'];
    
    
    this.service.getOnePlayer(this.playerId).subscribe((data)=>{
      console.log(data);
      this.player=data;
    })
          
  }

  onSubmit(){
    this. updatePlayer();
  }

  updatePlayer()
  {
    this.service.updatePlayer(this.player).subscribe((data)=>
    {
      console.log(data);
      this.player=new Player();
      this.gotoList();
    })
  }

  gotoList() {
    this.router.navigate(['list']);
  }
 

}
