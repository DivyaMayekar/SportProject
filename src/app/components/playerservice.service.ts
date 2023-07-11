import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  baseUrl="http://localhost:8082"
  constructor(private http:HttpClient) { }

  getAllPlayer()
  {
    return this.http.get(`${this.baseUrl}/getAll`);
  }
 
  deletePlayer(id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/delete/${id}` , {responseType:'text'});
  }

  getOnePlayer(id:number):Observable<any>
  { let id1=parseInt(id);
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }
  
  updatePlayer(player : object) 
  {
    return this.http.put(`${this.baseUrl}/update` , player);
  }
 
  createPlayer(player : object) :Observable<any>
  {
    return this.http.post(`${this.baseUrl}/save` , player);
  }
}
