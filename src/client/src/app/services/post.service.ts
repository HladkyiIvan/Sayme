import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Post } from '../Models/post';
import { NGXLogger } from 'ngx-logger';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { Id } from '../Models/Id';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url  = '/api/post';

  constructor( private http: HttpClient, private logger: NGXLogger) { }

  getLastPost(){
    return this.http.get<number>(this.url + '/lastpostid');
  }
  // GET
  getPosts(currentLastPostId){
    this.logger.debug('getting posts from service');
    return this.http.get(this.url + '/next/' + currentLastPostId.toString());
  }
  
  getAllPosts()
  {
    return this.http.get(this.url);
  }


  getNewPosts(lastPost: Id){
    return this.http.post(this.url + "/last", lastPost);
  }

  getUserPosts(id){
    return this.http.get(this.url + "/" + id.toString());
  }

  // POST
  createPost(post: Post){
    this.logger.debug('creating posts from service');
    return this.http.post(this.url, post);
  }

  updatePost(post: Post){
    return this.http.post(this.url + "/update", post);
  }
}
