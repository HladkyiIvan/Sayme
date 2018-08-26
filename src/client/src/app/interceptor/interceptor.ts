import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap } from '../../../node_modules/rxjs/operators';


@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request=req.clone({
            headers:new HttpHeaders().append('Authorization','Here we are'),
        });

        return next.handle(request).pipe(tap(
            (event:any)=>{},
            (error:any)=>{
                if(error instanceof HttpErrorResponse)
                {
                    console.error(error);
                }
            }
        ))
    }
}