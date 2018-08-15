import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {AuthService} from'../services/auth.service';
import { User } from '../Models/user';
import { timer } from '../../../node_modules/rxjs/internal/observable/timer';
import { first } from 'rxjs/operators/first';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [ UserService,AuthService]
})
export class AuthorisationComponent implements OnInit {

  private usersToSearch = [];
  private user=new User();
  private timeIt = timer(1, 10000);

  model: any = {};
    loading = false;
    returnUrl: string;
    error = '';

  constructor(private userService: UserService,private authService: AuthService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();
 
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/menu';
   // this.timeIt.subscribe(x => this.loadUsers());
  }

  login() {
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

  loadUsers(){
    this.userService.getUsers()
        .subscribe((data: User[]) => this.usersToSearch = data);
  }

}
