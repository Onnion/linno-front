import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService extends CrudServices {

    constructor(private httpService: HttpClient) {
        super();

        this.http = this.httpService;
        this.entity = 'users'
    }

    public sendSuportContact(data): Observable<any> {
        return new Observable((observer) => {
            this.http.post(`${environment.AUTH_URL}/api/'moura/suport-contact`, data).subscribe(
                (data: any) => observer.next(true),
                (error: any) => observer.error(error)
            );
        });
    }

}
