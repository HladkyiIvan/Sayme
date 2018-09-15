import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

numOfSubscriptions:number=0;

  private url='api/subscription';

  constructor(private http:HttpClient) {}

  getFollowed(){
    return this.http.get(this.url+'/followed');
  }

  getFollowing(){
    return this.http.get(this.url+'/following');
  }
  getBlackList(){
    return this.http.get(this.url+'/blacklist')
  }

  addToBlackList(idWhom:number){
    return this.http.post(this.url+'/blacklist',idWhom);
  }
}
