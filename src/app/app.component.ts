import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Abgabe2';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('base64token');
    if (token) {
      this.authService.base64token = token;
    }
  }
}
