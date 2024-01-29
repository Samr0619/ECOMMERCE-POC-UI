import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  message: any = null;

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
   this.getUserMessage();
  }

  getUserMessage = () => {
    debugger;
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain',
    });

    this.http.get('http://localhost:9096/user/test', {headers}).subscribe((res: any) => {
      this.message = res;
    }, error => {
      alert("Error From Api");
    })
  }
}
