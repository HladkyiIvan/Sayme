import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private urlFollowed='api/subscription/followed';
  private urlFollowing='api/subscription/following';

  constructor(private http:HttpClient) {}

  getFollowed(id:number){
    return this.http.get(this.urlFollowed+'/'+id);
  }

  getFollowing(id:number){
    return this.http.get(this.urlFollowing+'/'+id);
  }
}
