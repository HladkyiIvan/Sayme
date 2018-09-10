import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url = '/api/account/registrate';

  constructor(private http: HttpClient) { }

  postRegistration(user: User) {
    return this.http.post(this.url, user);

  }
}
