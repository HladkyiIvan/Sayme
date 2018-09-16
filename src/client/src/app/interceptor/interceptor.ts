import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service'


@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private tokenService: TokenService
    ) { }


    //Перехватывает каждый запрос на сервер, добавляет в хедеры запроса
    //авторизационный токен(если такой имеется). Если пользователь неавторизирован,
    //то редирект на логинпейдж
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
            let authToken: string = sessionStorage.getItem('token');
            if (authToken) {
                req = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
            }
        

        return next.handle(req).pipe(tap(
            () => { },
            (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 401)
                        this.router.navigate(['/login']);
                }
            }
        ))
            ;
    }



}