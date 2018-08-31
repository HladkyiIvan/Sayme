import { Component, OnInit } from '@angular/core';
import {LoginService} from'../services/login.service';
import { timer } from '../../../node_modules/rxjs/internal/observable/timer';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Login } from '../Models/login';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [ LoginService]
})
export class AuthorisationComponent implements OnInit {

  private url = '/api/user/authenticate';

  private usersToSearch = [];
  private user=new Login();
  private timeIt = timer(1, 10000);
  private errorMessage='';
  private isErrorHidden=true;

  constructor(private loginService: LoginService,  private router: Router, private cookieService: CookieService, private userserv: UserService) { }

  ngOnInit() {
  }

  //проверяет, есть ли такой юзер в бд, выдаёт аксес токен и редиректит на главную страничку
  onLogin()
  {
    if(this.user.login&&this.user.password)
    {
      this.isErrorHidden=true;
    this.loginService.postLogin(this.user).
    subscribe((response : Response) => {
        this.router.navigate(['/menu']);
      
    }, (error:HttpErrorResponse)=>{if(error.status==400){
      this.errorMessage="There is no user with this login or password";
      this.isErrorHidden=false;
    }
    })
    
  }
    else{
      this.errorMessage='Wrong input!';
      this.isErrorHidden=false;
    }


  }

  onRegistration(){
    this.router.navigate(['/registration']);
  }

 

}
