import { Component, OnInit } from '@angular/core';
// import { DataViewModule } from 'primeng/dataview';
import { PostService } from '../services/post.service';
import { Post } from '../Models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  public posts = [];
  private username: string;
  private text: string;

  // Инжектим пост-сервис в конструктор класса пост-компонента, 
  // чтобы можно было связать данные и потом выводить их на форму.
  constructor(private _postService: PostService){}

  // При первом вызове компонента вызывается метод сервиса, который
  // возвращает все посты, которые он нашел по АПИшке, и добавляет их
  // в локальный массив, который в свою очередь общаеться с формой 
  // хтмл файла.
  ngOnInit(){
    this._postService.getPosts()
        .subscribe(data => this.posts = data);
  }

  // добавляет новый пост в список постов
  onSay(){
    if(this.username.length > 0 && this.text.length > 0 && this.text.length <= 256){
      this.posts.push(new Post(this.username, '', this.text, 0));
      // очищаем поля на форме от повторного ввода
      this.username = ''
      this.text = ''
    }
  }

}

