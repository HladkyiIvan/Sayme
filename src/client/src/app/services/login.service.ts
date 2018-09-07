import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthUser } from '../Models/authUser';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[];

  constructor(private http: HttpClient) { }
  private url = '/api/account';
  private url1 = '/api/account/authorizate';
  token: string;

  TokenStringFromLocalstorage(){
    if(localStorage.getItem('token'))
    {
      this.token=localStorage.getItem('token');
      return true
    }
    return false
  }

  // GET
  getResponce(): Observable<HttpResponse<AuthUser>> {
    return this.http.get<AuthUser>(
      this.url, { observe: 'response' });
  }


  postLogin(login: AuthUser) {
    return this.http.post(this.url1, login);

  }

  // POST
  postLoginUser(login: AuthUser) {
    return this.http.post(this.url, login);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }


}
