import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap } from '../../../node_modules/rxjs/operators';
import {  Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {LoginService} from '../services/login.service';


@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private router:Router, private cookieService: CookieService, private loginService:LoginService) { }


    //Перехватывает каждый запрос на сервер, добавляет в хедеры запроса
    //авторизационный токен(если такой имеется). Если пользователь неавторизирован,
    //то редирект на логинпейдж
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var authToken=this.getToken();
        if(authToken!=null)
        {
            this.setItem(authToken);
        }

       var token=this.loginService.token;
        req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
          
        return next.handle(req).pipe(tap(
            () => { },
            (error:any)=>{
                if(error instanceof HttpErrorResponse)
                {
                    if(error.status==401)
                    this.router.navigate(['/login']);
                }
            }
        ))
        ;

    }

    //Размещает токен в сервисе
    private setItem(token:string)
    {
        this.loginService.token=token;
    }

    private getToken(){
        if(this.cookieService.check('token'))
        {
            var authToken=this.cookieService.get('token');
            this.cookieService.delete('token');
            return authToken;
        }
        else return null;
    }
}