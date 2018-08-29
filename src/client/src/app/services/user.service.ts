import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
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

  updateUser(user: User){
    return this.http.put(this.url + '/' + user.id.toString(), user);
  }

  updateAvatar(id_user: number, file: File) {

    let formData = new FormData();
    formData.append('image', file);

    return this.http.put(this.url + '/' + id_user.toString(), formData);
  }
}
