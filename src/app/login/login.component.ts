import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name = "mahesh"
  user = {
    email: '', password: ''
  }
  constructor(private router: Router, private auth: AuthService) { }
  login() {

    console.log(this.auth.isLoggedIn)

    if (this.user.email === 'admin' && this.user.password === 'admin') {
      this.auth.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Error Login failed');

    }
  }
}
