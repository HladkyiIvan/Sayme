import { CommentService } from "../../services/comment.service";
import { NGXLogger } from "ngx-logger";
import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";
import { Comment } from "../../Models/comment";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
    providers: [CommentService, NGXLogger]
  })
export class CommentComponent implements OnInit {

  comments: Comment[] = [];
  lastCommentID: number = -1;
  newestCommentID: number = 0;
  timeIt = timer(10000, 5000);

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
     this.loadComments(this.newestCommentID, this.lastCommentID);
    }

    loadComments(newestCommentID, lastCommentID) {
      this.commentService.getNextComments(newestCommentID, lastCommentID)
        .subscribe((data: Comment[]) => {
          this.comments = data;    
          this.lastCommentID = this.comments[this.comments.length-1].id;
        });
    }
  }

  