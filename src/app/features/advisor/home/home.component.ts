import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public primaryColor = '#c5cae9';
  public textColor = '#fff';
  public isMobile: boolean;

  get numberOfColumns() {
    return this.isMobile ? 2 : 4;
  }

  get columnSpan() {
    return 1;
  }

  get rowSpan() {
    return this.isMobile ? 1 : 2;
  }

  get actionGutters() {
    return this.isMobile ? '10px' : '50px';
  }

  constructor(public auth: AuthService, public userService: UserService) { }

  ngOnInit() {
    this.isMobile = (window.innerWidth <= 700);
  }

  onResize(event) {
    this.isMobile = (event.target.innerWidth <= 700);
  }
}
