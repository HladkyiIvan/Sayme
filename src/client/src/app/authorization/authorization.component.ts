import { Component, OnInit } from '@angular/core';
import {LoginService} from'../services/login.service';
import { timer } from '../../../node_modules/rxjs/internal/observable/timer';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../Models/login';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [ LoginService]
})
export class AuthorisationComponent implements OnInit {

  private usersToSearch = [];
  private user=new Login();
  private timeIt = timer(1, 10000);
  private errorMessage='';

  model: any = {};
    loading = false;
    returnUrl: string;
    error = '';

  constructor(private loginService: LoginService,  private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    //this.loginService.checkLoggingIn();
    // reset login status
   // this.authService.logout();
 
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/menu';
    //this.timeIt.subscribe(x => this.loadUsers());
  }


  onLogin()
  {
    if(this.user.login&&this.user.password)
    {
      this.loginService.postLoginUser(this.user)
      .subscribe((data:Login)=>this.usersToSearch.push(data));
      const cookieExists: boolean = this.cookieService.check('access');
      console.log(cookieExists);
      if(cookieExists) this.router.navigate(['/menu']);
      else this.errorMessage='Wrong login or password';
      
    }
    else{
      this.errorMessage='Wrong input!';
    }
  }

  onRegistration(){
    this.router.navigate(['/registration']);
  }

  /*login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
          }

          */

  /*onLogin(){
    this.usersToSearch.forEach(element => {
      if (element.login == this.user.login&&element.password==this.user.password){
        this.user.id = element.id;
      }
      if(!this.user.id)
      {
        
      }
    });
  }*/

  /*loadUsers(){
    this.LoginService.getLoginUsers()
        .subscribe((data: Login[]) => this.usersToSearch = data);
  }*/

}
