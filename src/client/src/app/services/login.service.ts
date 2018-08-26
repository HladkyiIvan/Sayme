import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {Login} from '../Models/login';
import {User} from '../Models/user';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../services/user.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private users:User[];

  constructor(private http: HttpClient,private cookieService: CookieService,private router: Router, private route: ActivatedRoute) { }
 private url='/api/login';
 // GET
 getResponce(): Observable<HttpResponse<Login>> {
  return this.http.get<Login>(
    this.url, { observe: 'response' });
}

// POST
postLoginUser(login: Login) {
  return this.http.post(this.url, login);
}


//check if user is loggined in
checkLoggingIn(){
  const cookieExists: boolean = this.cookieService.check('access');
  if(cookieExists) return true;
  else this.router.navigate(['/login']);
}
}
