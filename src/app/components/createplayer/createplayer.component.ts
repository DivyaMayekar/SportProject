import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayerserviceService } from '../playerservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrls: ['./createplayer.component.css']
})
export class CreateplayerComponent {

  submitted = false;
  player = new Player();

  constructor(private service : PlayerserviceService , private router : Router)
  {}

  onSubmit()
  {
    this.submitted=true;
    this.save();
  }

  save()
  {
    this.service.createPlayer(this.player).subscribe((data)=>{
      console.log(data);
      this.gotoList
    })
    this.gotoList();
  }

 gotoList()
 {
  this.router.navigate(['list']);
 }

}
