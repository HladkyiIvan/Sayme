import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Login } from '../Models/login';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private cookieService: CookieService,private router: Router, private route: ActivatedRoute) { }
  private url='/api/account';
  private url1='/api/account/authenticate';

  // GET
  getResponce(): Observable<HttpResponse<Login>> {
  return this.http.get<Login>(
    this.url, { observe: 'response' });
  }


  postLogin(){
    return this.http.post(this.url1,'').subscribe(()=>{},error=>console.log(error));
  }

  // POST
  postLoginUser(login: Login) {
    return this.http.post(this.url, login);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
