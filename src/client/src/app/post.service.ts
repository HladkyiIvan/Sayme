import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { MessageService } from './message.service';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url: string = "/api/post"

  constructor( private http: HttpClient,
    private messageService: MessageService) { }

  //Логирование ошибки в консоли страницы
  private log(message: string) {
    this.messageService.add(`PostService: ${message}`);
  }

  //Обработчик ошибок GET
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  //GET
  getPosts() {
    return this.http.get(this._url).pipe(
      catchError(this.handleError('getPosts', []))
    );
  }
  
  //POST
  createPost(post: Post) {
    return this.http.post(this._url, post);
  }
}
