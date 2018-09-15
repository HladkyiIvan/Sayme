import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { Id } from '../Models/id';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private url='api/subscription'

  constructor(private http:HttpClient) {}

  getFollowed(id:number){
    return this.http.get(this.url+'/followed/'+id);
  }

  getFollowing(id:number){
    return this.http.get(this.url+'/followed/'+id);
  }

  userSubscribe(id:Id){
    return this.http.post(this.url+'/subscribe', id);
  }
}
