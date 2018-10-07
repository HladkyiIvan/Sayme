import { CommentService } from "../../services/comment.service";
import { NGXLogger } from "ngx-logger";
import { Component, OnInit, HostListener } from "@angular/core";
import { timer, Subscription } from "rxjs";
import { Comment } from "../../Models/comment";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PostImage } from "../../Models/postimage";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { User } from "../../Models/user";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [CommentService, NGXLogger]
})
export class CommentComponent implements OnInit {

  comments: Comment[];
  post: PostImage;
  subscriptions: Subscription[];
  lastCommentID: number = -1;
  timeIt = timer(10000, 5000);
  newComment = new Comment();

  constructor(
    public modalRef: BsModalRef,
    private commentService: CommentService,
    private userService: UserService,
    private router: Router
  ) {
    this.subscriptions = [];
    this.onScroll = this.onScroll.bind(this);
  }

  ngOnInit() {
    document.getElementById('comments-list').addEventListener("scroll", this.onScroll);
    this.updateComments(this.post.post.id, -1);    
    this.subscriptions.push(this.timeIt.subscribe(() => 
    { this.updateComments(this.post.post.id, -1) }));
  }

  ngOnDestroy() {
    for (let subs of this.subscriptions) {
      subs.unsubscribe();
    }
  }

  updateComments(postID, lastCommentID) {
    this.commentService.getNextComments(postID, lastCommentID)
      .subscribe((data: Comment[]) => {
        this.comments = data;
        this.lastCommentID = this.comments.length ? this.comments[this.comments.length - 1].id : -1;
      });
  }
  loadComments(postID, lastCommentID) {
    this.commentService.getNextComments(postID, lastCommentID)
      .subscribe((data: Comment[]) => {
        for (let comment of data) {
          this.comments.push(comment);
        }
        this.lastCommentID = this.comments.length ? this.comments[this.comments.length - 1].id : -1;
      });
  }

  addComment() {
    this.newComment.id_post = this.post.post.id;
    this.newComment.isDeletable = true;

    this.commentService.addComment(this.newComment)
      .subscribe(() => {
        this.newComment = new Comment();
      });
  }

  deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment)
      .subscribe(() => {
        // console.log(comment.id);
      });
  }

  onScroll() {    
    let elem = document.getElementById('comments-list');
    let pos = (elem.scrollTop || elem.scrollTop)
      + elem.offsetHeight;
    let max = elem.scrollHeight;
    if (Math.floor(pos) == max || Math.floor(pos) == max - 1) {     
      this.loadComments(this.post.post.id, this.lastCommentID);
    }
  }

  gotoUserpage(id: number) {
    let strId = id.toString();
    this.userService.getCurrent()
      .subscribe((data: User) => {
        if (data.id == id) {
          this.router.navigate(['**']);
        }
        else {
          this.router.navigate(['/user/' + strId]);
        }
      }, (error: HttpErrorResponse) => console.log(error));
  }
}

