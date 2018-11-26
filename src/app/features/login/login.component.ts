import { ApiService } from './../../services/api.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data = {
    email: '',
    password: ''
  };

  public submitting = false;

  constructor(private auth: AuthService, private api: ApiService, private router: Router) { }

  async ngOnInit() {
  }

  async onSubmitForm(event) {
    this.submitting = true;
    event.preventDefault();
    const { email, password } = this.data;
    const user: any = await this.auth.loginWithCredentials(email, password);
    this.router.navigate([user && user.role === 'advisor' ? '/advisor' : '/client']);
    this.submitting = false;
  }

}
