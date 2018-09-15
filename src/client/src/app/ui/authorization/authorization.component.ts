import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthUser } from '../../Models/authUser';
import { HttpErrorResponse } from '@angular/common/http';
import {TokenService} from '../../services/token.service';
import { Token } from '../../Models/token';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [LoginService]
})
export class AuthorisationComponent implements OnInit {


  private user = new AuthUser();
  private errorMessage = '';
  private isErrorHidden = true;

  constructor(
    private loginService: LoginService,
    private router: Router, 
    private tokenService : TokenService
  ) { }

  ngOnInit() {
  }

  //проверяет, есть ли такой юзер в бд, выдаёт аксес токен и редиректит на главную страничку
  onLogin() {
    if (this.user.login && this.user.password) {
      this.isErrorHidden = true;
      this.loginService.postLogin(this.user).
        subscribe((response: Response) => {
          localStorage.setItem('curUser', this.user.login);
          this.tokenService.getToken()
          .subscribe(
            (data:Token)=>{
              console.log(data.text);
              this.tokenService.token=data.text;
              sessionStorage.setItem('token',data.text);
              this.router.navigate(['/post']);
            }
          );
          
        }, (error: HttpErrorResponse) => {
          if (error.status == 400) {
            this.errorMessage = "There is no user with this login or password";
            this.isErrorHidden = false;
          }
        })

    }
    else {
      this.errorMessage = 'Wrong input!';
      this.isErrorHidden = false;
    }

  }

  onPressRegistration() {
    this.router.navigate(['/registration']);
  }



}
