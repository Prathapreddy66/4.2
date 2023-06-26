import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayerCenturies95() {
    this.apiService.getPlayerCenturies95().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getRightHandPlayers() {
    this.apiService.getRightHandPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getLeftHandPlayers() {
    this.apiService.getLeftHandPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayerNameByVirat() {
    this.apiService.getPlayerNameByVirat().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersFifties70() {
    this.apiService.getPlayersFifties70().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-player-centuries-95') {
      this.getPlayerCenturies95();
    } else if (value === 'get-right-hand-players') {
      this.getRightHandPlayers();
    } else if (value === 'get-left-hand-players') {
      this.getLeftHandPlayers();
    } else if (value === 'get-player-name-by-Virat') {
      this.getPlayerNameByVirat();
    } else if (value === 'get-players-fifties-70') {
      this.getPlayersFifties70();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
