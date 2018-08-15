import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = '/api/user';

  constructor(private http: HttpClient) { }



  getUsers() {
    return this.http.get(this.url);
  }

  getUser(id: number) {
    return this.http.get(this.url + '/' + id.toString());
  }

  createUser(user: User) {
    return this.http.post(this.url, user);
  }
}
