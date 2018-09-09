import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Post } from '../Models/post';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url  = '/api/post';

  constructor( private http: HttpClient, private logger: NGXLogger) { }

  // GET
  getPosts() {
    this.logger.debug('getting posts from service');
    return this.http.get(this.url);
  }

  getUserPosts(id) {
    return this.http.get(this.url + "/" + id.toString());
  }

  // POST
  createPost(post: Post) {
    this.logger.debug('creating posts from service');
    return this.http.post(this.url, post);
  }

  updatePost(post: Post) {
    return this.http.post(this.url + "/update", post);
  }
}
