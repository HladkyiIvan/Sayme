import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Comment } from '../Models/comment';

@Injectable({
    providedIn: 'root'
  })
export class CommentService {
    private url = 'api/comment';

    constructor(private http: HttpClient, private logger: NGXLogger) { }

    addComment(comment: Comment) {
        this.logger.debug('create post from service');
        return this.http.post(this.url + '/add', comment);
    }
   
    deleteComment(comment: Comment) {
        this.logger.debug('delete post from service');
        return this.http.post(this.url + '/delete', comment);
    }

    getNextComments(postID: number, lastCommentID: number) {
        return this.http.post(this.url + '/next',  {postID, lastCommentID});
    }
}