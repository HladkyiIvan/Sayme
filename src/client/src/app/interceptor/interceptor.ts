import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap } from '../../../node_modules/rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private router:Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1MzU1NzYzMzMsImV4cCI6MTUzNjE4MTEzMywiaWF0IjoxNTM1NTc2MzMzfQ.8RKSatsDQYRkv4UsDAsfpRjewi_Vgb4nmW0w-elnf8g`
            }
          });
          
        return next.handle(req).pipe(tap(
            (event:any)=>{},
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
}