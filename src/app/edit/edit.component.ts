import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  data: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {
    this.data = window.history.state;
  }
  updatePlayer(
    _id: string,
    Name: string,
    BattingStyle: string,
    Centuries: number,
    Fifties: number
  ) {
    this.apiService
      .updatePlayer({
        _id: _id,
        Name: Name,
        BattingStyle: BattingStyle,
        Centuries: Centuries,
        Fifties: Fifties,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('updatePlayer', this.data);
      });
  }
  Update(
    _id: string,
    Name: string,
    BattingStyle: string,
    Centuries: number,
    Fifties: number
  ) {
    this.updatePlayer(_id, Name, BattingStyle, Centuries, Fifties);
    this.routes.navigate(['/dashboard']);
  }
}
