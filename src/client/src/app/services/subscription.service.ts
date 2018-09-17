import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  numOfSubscriptions: number = 0;

  private url = 'api/subscription';

  blacklist = [];

  constructor(private http: HttpClient) { }

  getFollowed() {
    return this.http.get(this.url + '/followed');
  }

  getFollowing() {
    return this.http.get(this.url + '/following');
  }

  deleteFollowing(idWhom: number) {
    return this.http.delete(this.url + '/followed/' + idWhom,{responseType:'text'});
  }

  deleteFromBlacklist(idWhom:number){
    return this.http.delete(this.url+'/blacklist/'+idWhom, {responseType:'text'});
  }

  getBlackList() {
    return this.http.get(this.url + '/blacklist');
  }

  getBlacklisted(){
    return this.http.get(this.url+'/blacklisted');
  }


  addToBlackList(idWhom: number) {
    return this.http.post(this.url + '/blacklist/' + idWhom, idWhom);
  }
}