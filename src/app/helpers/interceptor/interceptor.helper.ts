import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, retry } from 'rxjs/operators';
// import {AuthService} from '../../services/auth/auth.service';
import { HandlerErrorHelpers } from '../handler-error/handler-error.helper';
import { getToken } from 'src/app/app.utils';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    protected handlerErrorHelper;


    constructor(
        // public auth: AuthService, 
        private handler: HandlerErrorHelpers) {
        this.handlerErrorHelper = handler;
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = getToken();
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token && token.token.access_token}`
            }
        });

        // retry(1)
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if ((event.body && event.body.error) || (event.body && event.body.data && event.body.data.error)) {
                    this.handlerErrorHelper.handle(event);
                }
            }
        },
            (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    this.handlerErrorHelper.handle(error);

                }
            })
        );
    }
}
