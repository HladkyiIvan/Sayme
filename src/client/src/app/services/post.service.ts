import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Post } from '../Models/post';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = '/api/post';

  constructor( private http: HttpClient) { }


  // GET
  getPosts() {
    return this.http.get(this.url);
  }

  getUserPosts(id) {
    return this.http.get(this.url + "/" + id.toString());
  }

  // POST
  createPost(post: Post) {
    return this.http.post(this.url, post);
  }
}
