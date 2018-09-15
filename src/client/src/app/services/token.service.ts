import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private url='/api/account/generateToken';

  constructor(private http: HttpClient) { }

  token: string;

  TokenStringFromLocalstorage(){
    if(localStorage.getItem('token'))
    {
      this.token=localStorage.getItem('token');
      return true
    }
    return false
  }

  getToken() {
    return this.http.get(this.url);
  }
}
