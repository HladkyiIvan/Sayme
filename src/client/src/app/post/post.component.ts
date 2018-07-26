import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { PostService } from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  public posts = [];
  private newpost = new Post('', '', '', 0)

  constructor(private _postService: PostService){}

  ngOnInit(){
    this._postService.getPosts()
        .subscribe(data => this.posts = data);
  }

  onSay(){
    this.posts.push(this.newpost)
    this.newpost = new Post('', '', '', 0)
  }
}

