import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { Console } from 'console';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin = () => {
    // debugger;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    try {
      this.http.post('http://localhost:9096/user/login', this.loginObj, { headers }).subscribe((res: any) => {
        console.log(res);
        alert(res.accessToken);
        localStorage.setItem('accessToken', res.accessToken);
      })
    }
    catch (error) {
      alert("Email or Password incorrect!")
      console.error(error);
    }

  }

  routeToHome() {
    this.router.navigateByUrl('/ecom-poc/home');
  }

  onResetLogin = () => {
    this.router.navigateByUrl('/ecom-poc/reset/password');

  }

  routeToRegisterPage() {
    this.router.navigateByUrl('/ecom-poc/register');
  }

  routeToLoginPage() {
    this.router.navigateByUrl('/ecom-poc/login');
  }

  routeToSearchResults() {
    this.router.navigateByUrl('/ecom-poc/search/results');
  }

}

export class Login {

  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}