import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Post } from '../Models/post';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url: string = '/api/post'

  constructor( private http: HttpClient) { }

  
  //GET
  getPosts() {
    return this.http.get(this._url);
  }
  
  //POST
  createPost(post: Post) {
    return this.http.post(this._url, post);
  }
}
