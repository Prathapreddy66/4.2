import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getPlayerCenturies95() {
    return this.http.get('http://localhost:3000/get-player-centuries-95');
  }
  public getRightHandPlayers() {
    return this.http.get('http://localhost:3000/get-right-hand-players');
  }
  public getLeftHandPlayers() {
    return this.http.get('http://localhost:3000/get-left-hand-players');
  }
  public getPlayerNameByVirat() {
    return this.http.get('http://localhost:3000/get-player-name-by-Virat');
  }
  public getPlayersFifties70() {
    return this.http.get('http://localhost:3000/get-players-fifties-70');
  }
}
