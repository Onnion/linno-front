import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap   } from 'rxjs/operators';
import { getToken } from '../services/cookie/cookie.service';
import { HandlerErrorHelpers } from '../interfaces/handle-error/handle-error';
// import { HandlerErrorHelpers } from '../handler-error/handler-error.helper';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private handler: HandlerErrorHelpers) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = getToken(localStorage.getItem('context'));

        request = request.clone({
            setHeaders: {
                Authorization: `${token && `${token.token_type} ${token.access_token}`}`,
            }
        });

        // retry(1)
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if ((event.body && event.body.error) || (event.body && event.body.data && event.body.data.error)) {
                    this.handler.handle(event);
                }
            }
        },
            (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    this.handler.handle(error);
                }
            })
        );
    }
}
