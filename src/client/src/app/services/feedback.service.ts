import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../Models/email';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private _url: string = 'api/feedback'
  private urlCode='api/feedback/sendcode';

  constructor(private http: HttpClient) { }

  sendFeedback(feedback: Email) {
    return this.http.post(this._url, feedback);
  }

  sendCode(email:Email){
    return this.http.post(this.urlCode, email);
  }
}
