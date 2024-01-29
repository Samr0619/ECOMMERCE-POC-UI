import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  registerObj: Register;

  constructor(private http: HttpClient, private router: Router) {
    this.registerObj = new Register();
  }

  onSignUp = () => {
    // debugger;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    try {
      this.http.post('http://localhost:9096/user/register', this.registerObj, { headers }).subscribe((res: any) => {
        console.log(res);
        alert("SignUp Success...")
      })
    }
    catch (error) {
      console.error(error);
    }

  }

  routeToHome() {
    this.router.navigateByUrl('/ecom-poc/home');
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

export class Register {

  name: string;
  email: string;
  userName: string;
  password: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.userName = '';
    this.password = '';
  }
}

