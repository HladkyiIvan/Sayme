import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap } from '../../../node_modules/rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private router:Router, private cookieService: CookieService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var authToken=this.getToken();
        if(authToken!=null)
        {
            this.setItem(authToken);
        }
        var token=this.getTokenFromLocalstorage();

        req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
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

    private getTokenFromLocalstorage(){
        var item=localStorage.getItem('token');
        if(!item){
            return null;
        }
        else return item;
    }

    private setItem(token:string)
    {
        localStorage.setItem('token',token);
    }

    private getToken(){
        if(this.cookieService.check('token'))
        {
            var authToken=this.cookieService.get('token');
            console.log(authToken);
            return authToken;
        }
        else return null;
    }
}