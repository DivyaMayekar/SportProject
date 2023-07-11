import { Component, OnInit } from '@angular/core';
import { PlayerserviceService } from '../playerservice.service';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit{

  players:any=[
    {
      playerId:'',
      playerName:''
    }
  ]
  constructor(private service:PlayerserviceService , private router:Router){

  }
  ngOnInit(): void 
  {
    this.getAll()
  }

  getAll() 
  {
    this.service.getAllPlayer().subscribe((data)=>{
      this.players=data;    
    })
  }

  playerDetails(id:number)
  {
    this.router.navigate(['details' , id]);
  }

  deletePlayer(id:number)
  {
    return this.service.deletePlayer(id).subscribe((data)=>{
      console.log(data);
      this.getAll();
    })
  }
  updateDetails(id:number)
  {
    this.router.navigate(['update' , id])
  }
  
}
