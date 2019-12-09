import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
// import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class HandlerErrorHelpers {
    // private auth: AuthService;

    constructor(
        // private authService: AuthService,
        // private notify: NotifyService
    ) {
        // this.auth = this.authService;
    }

    private handleFailed(error: HttpErrorResponse): void {
        // this.notify.show('error', 'Teste sua conexão com a internet');
    }

    private handle200(error: any): void {
        // this.notify.show('warning', error.body.data.message);
    }

    private handle400(error: HttpErrorResponse): void {
        // this.notify.show('error', error.error.data.message);
    }

    private handle401(error: HttpErrorResponse): void {
        // const msg = this.auth.isLoggedIn() ? 'Faça o login novamente' : 'Usuário ou senha errados';
        // this.notify.show('error', msg);
        // this.auth.logout();
    }

    private handle404(error: HttpErrorResponse): void {
        // this.notify.show('error', 'Ocorreu um erro, favor entre contato com o administrador do sistema');
    }

    private handle422(error: HttpErrorResponse): void {
        // _.forEach(error.error.message, (message, key) => {
        //     this.notify.show('warning', message[0]);
        // });
    }

    private handle429(error: HttpErrorResponse): void {
        // this.notify.show('error', 'Aguarde 1 minuto e recarregue a página');
    }

    private handle500(error: HttpErrorResponse): void {
        // this.notify.show('error', 'Serviço indisponível');
    }

    public handle(error: HttpErrorResponse | HttpResponse<any>): void {
        const fail = error.status === 0;
        const success = error.status === 200;
        this[`handle${fail ? 'failed' : error.status}`](success ? error as HttpResponse<any> : error as HttpErrorResponse);
    }
}
