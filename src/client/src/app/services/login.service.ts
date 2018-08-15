import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from '../Models/login';
import {User} from '../Models/user';
import {UserService} from '../services/user.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private users:User[];

  constructor(private http: HttpClient, private userService:UserService) { }

 /* getLogins(): Login[] {
   
  } */
}
