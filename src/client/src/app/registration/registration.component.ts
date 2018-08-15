import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Models/user';
import { timer } from '../../../node_modules/rxjs/internal/observable/timer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ UserService]
})
export class RegistrationComponent implements OnInit {
  
  private usersToSearch = [];
  private newUser=new User();
  private RepPassword:string;
  isChecked:boolean=false;
  isDisabled:boolean=true;
  private timeIt = timer(1, 10000);

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.timeIt.subscribe(x => this.loadUsers());
  }


  onRegister(){
    this.usersToSearch.forEach(element => {
      if (element.mail == this.newUser.mail){
        this.newUser.id = element.id;
      }
    });

    if(!this.newUser.id)
    {
      this.newUser.active=true;
      this.newUser.bio='';
      this.userService.createUser(this.newUser).
        subscribe((data: User) => this.usersToSearch.push(data));
    }
  }

  loadUsers() {
    this.userService.getUsers()
        .subscribe((data: User[]) => this.usersToSearch = data);
    
  } 
}
