import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  resetPasswordObj: ResetPassword;

  constructor(private http: HttpClient, private router: Router) {
    this.resetPasswordObj = new ResetPassword();
  }

  resetPassword = () => {
    // debugger;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    try {
      this.http.put(`http://localhost:9096/user/update/password`, this.resetPasswordObj, { headers }).subscribe((res: any) => {
        console.log(res);
        alert(res);
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

export class ResetPassword {

  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}