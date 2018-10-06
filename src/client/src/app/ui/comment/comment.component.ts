import { CommentService } from "../../services/comment.service";
import { NGXLogger } from "ngx-logger";
import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";
import { Comment } from "../../Models/comment";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from "../../services/user.service";
import { HttpErrorResponse } from "@angular/common/http";
import { User } from "../../Models/user";
import { Post } from "../../Models/post";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [CommentService, NGXLogger]
})
export class CommentComponent implements OnInit {

  comments: Comment[] = [];
  post: Post;
  lastCommentID: number = -1;
  newestCommentID: number = 0;
  timeIt = timer(10000, 5000);
  currentUser: User;
  newComment = new Comment();

  constructor(
    public modalRef: BsModalRef,
    private commentService: CommentService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadComments(this.newestCommentID, this.lastCommentID);
  }

  loadComments(newestCommentID, lastCommentID) {
    this.commentService.getNextComments(newestCommentID, lastCommentID)
      .subscribe((data: Comment[]) => {
        this.comments = data;
        this.lastCommentID = this.comments.length ? this.comments[this.comments.length - 1].id : -1;
      });
  }

  getCurrentUser() {
    this.userService.getCurrent()
      .subscribe((data: User) => {
        this.currentUser = data;
      }, (error: HttpErrorResponse) => console.log(error));
  }

  addComment() {    
    this.newComment.postId = this.post.id;
    this.newComment.userId = this.currentUser.id;
    this.newComment.isDeletable = true;
    this.commentService.addComment(this.newComment)
      .subscribe(() => {
        this.newComment = new Comment();
      });
  }

}

