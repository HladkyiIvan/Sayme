import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = '/api/users';

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(this.url);
  }

  getUser(id: number) {
    return this.http.get(this.url + '/' + id.toString());
  }

  createUser(user: Users) {
    return this.http.post(this.url, user);
  }
}
