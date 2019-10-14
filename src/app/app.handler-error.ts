import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isLoggedIn } from './app.utils';
import * as _ from 'lodash';

@Injectable()
export class HandlerErrorHelpers {

    constructor() {
    }

    public static handleFailed(error: HttpErrorResponse): void {
        console.log('error', 'Teste sua conexão com a internet');
    }

    public static handle200(response: HttpResponse<any>): void {
        console.log('warning', response.body.data.message);
    }

    public static handle400(error: HttpErrorResponse): void {
        console.log('error', error.error.data.message);
    }

    public static handle401(error: HttpErrorResponse): void {
        const msg = isLoggedIn() ? 'Faça o login novamente' : 'Usuário ou senha errados';
        console.log('error', msg);
        // this.auth.logout();
    }

    public static handle404(error: HttpErrorResponse): void {
        console.log('error', 'Ocorreu um erro, favor entre contato com o administrador do sistema');
    }

    public static handle422(error: HttpErrorResponse): void {
        _.forEach(error.error.message, (message, key) => {
            console.log('warning', message[0]);
        });
    }

    public static handle429(error: HttpErrorResponse): void {
        console.log('error', 'Aguarde 1 minuto e recarregue a página');
    }

    public static handle500(error: HttpErrorResponse): void {
        console.log('error', 'Serviço indisponível');
    }

    public static handle503(error: HttpErrorResponse): void {
        console.log('warning', `Nenhuma informação disponível do ${error.url.includes('facebook-report') ? 'Facebook' : 'Google'}`);
    }

    public static handle(error: (HttpErrorResponse | HttpResponse<any>)): void {
        switch (error.status) {
            case 0: this.handleFailed(error as HttpErrorResponse); break;
            case 200: this.handle200(error as HttpResponse<any>); break;
            case 400: this.handle400(error as HttpErrorResponse); break;
            case 401: this.handle401(error as HttpErrorResponse); break;
            case 404: this.handle404(error as HttpErrorResponse); break;
            case 422: this.handle422(error as HttpErrorResponse); break;
            case 429: this.handle429(error as HttpErrorResponse); break;
            case 500: this.handle500(error as HttpErrorResponse); break;
            case 503: this.handle503(error as HttpErrorResponse); break;
        }
    }


}
