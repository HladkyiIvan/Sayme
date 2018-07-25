import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private _url: string = "assets/posts.json"
  
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this._url);
  }
}
