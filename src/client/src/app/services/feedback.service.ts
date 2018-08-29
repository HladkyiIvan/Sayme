import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../Models/email';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private _url: string = 'api/feedback'
  private urlCode='api/feedback/sendcode';

  constructor(private http: HttpClient, private logger: NGXLogger) { }

  sendFeedback(feedback: Email) {
    this.logger.debug('sending feedback in service');
    return this.http.post(this._url, feedback);
  }

  sendCode(email:Email){
    this.logger.debug('sending code in service');
    return this.http.post(this.urlCode, email);
  }
}
