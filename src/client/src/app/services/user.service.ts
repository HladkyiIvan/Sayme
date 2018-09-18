import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../Models/user';
import { NGXLogger } from 'ngx-logger';
import { Code } from '../Models/code';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = '/api/user';

  constructor(private http: HttpClient, private logger: NGXLogger) { }


  getUsers() {
    this.logger.debug('get users from service');
    return this.http.get(this.url);
  }

  getUser(id: number) {
    return this.http.get(this.url + '/' + id.toString());
  }

  getCurrent()
  {
    return this.http.get(this.url+'/current')
  }

  createUser(user: User) {
    this.logger.debug('create user from service');
    return this.http.post(this.url, user);
  }

  updateBio(bio: Code){
    return this.http.put(this.url + '/bio', bio, {observe: "response"});
  }

  updatePassword(password: Code){
    return this.http.put(this.url + '/password', password, {observe: "response"});
  }

  updateEmail(email: Code){
    return this.http.put(this.url + '/email', email, {observe: "response"});
  }

  updateAvatar(id_user: number, file: File) {

    let formData = new FormData();
    formData.append('image', file);

    return this.http.put(this.url + '/' + id_user.toString(), formData);
  }

  checkPassword(passwordCheck: Code){
    return this.http.post(this.url + '/checkpassword', passwordCheck, {observe: "response"});
  }

  checkOldEmail(emailCheck: Code){
    return this.http.post(this.url + '/checkoldemail', emailCheck, {observe: "response"});
  }

  checkNewEmail(emailCheck: Code){
    return this.http.post(this.url + '/checknewemail', emailCheck, {observe: "response"});
  }
}
