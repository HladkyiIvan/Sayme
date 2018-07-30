import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Models/post';
import { Observable } from 'rxjs';

@Injectable({
  // эта фича появилась в 6 ангуляре, пусть так и будет.
  providedIn: 'root'
})
export class PostService {

  // инжектим хттп клиента в конструктор класса сервиса, чтобы этот класс не мог без него работать.
  constructor(private http: HttpClient) { }

  // здесь указываем абсолютный урл к АПИ сервака, по которому мы забираем или отдаем данные.
  // !!!этот мы используем для подкачки постов с сервера!!!
  private _url: string = "assets/posts.json"
  
  // Обзервбл нужен для автоматического обновления данных на странице браузера.
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this._url);
  }
}
