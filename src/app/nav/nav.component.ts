import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  benutzername: string = '';
  passwort: string = '';

  constructor(private authService: AuthService) {
  }

  isLoggedIn() {
    return this.authService.base64token != null;
  }

  async login() {
    await this.authService.login(this.benutzername, this.passwort)
  }

  logout() {
    this.authService.logout()
    this.benutzername = '';
    this.passwort = '';
  }

  ngOnInit(): void {
    this.benutzername = localStorage.getItem('username')
  }

}
