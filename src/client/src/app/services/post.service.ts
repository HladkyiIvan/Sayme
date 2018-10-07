import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders  } from '@angular/common/http';
import { Post } from '../Models/post';
import { NGXLogger } from 'ngx-logger';
import { Id } from '../Models/Id';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url  = '/api/post';
  private url_like = '/api/like';

  constructor( private http: HttpClient, private logger: NGXLogger) { }

  checkForLastPostInDB(lastPostId){
    return this.http.get<boolean>(this.url + '/nomoreposts/' + lastPostId.toString());
  }

  getLastPost(){
    return this.http.get<Post>(this.url + '/lastpost');
  }

  getLastPostId(){
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

  //LIKE
  likePost (id_post: number){
    let header = new HttpHeaders().set('id_post',id_post.toString());
    return this.http.get(this.url_like+"/like", {headers: header});
  }

  countLikes (id_post: number){
    let header = new HttpHeaders().set('id_post',id_post.toString());
    return this.http.get<number>(this.url_like+"/countLikes", {headers: header});
  }

  checkIfLiked (id_post: number){
    let header = new HttpHeaders().set('id_post',id_post.toString());
    return this.http.get<boolean>(this.url_like+"/checkIfLiked", {headers: header});
  }
}
