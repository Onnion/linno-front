import { Injectable } from "@angular/core";
import { CrudServices } from '../../interfaces/crud/crud-services.helpers';
import { HttpClient } from '@angular/common/http';
import { User, UserStore } from '../../models/user/user.model';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class UsersService extends CrudServices<User> {

    constructor(private httpClient: HttpClient) {
        super();
        this.http = this.httpClient;
        this.entity = 'users';
    }

    public saveUser(data: UserStore): Observable<UserStore> {
        const user_data = {
            user: {...data.user, role_id: data.user.type === 'factory' ? 3 : 2},
            [data.user.type]: {...data.company},
            address: {...data.address}
        };

        return new Observable((observer) => {
            this.http.post(`${environment.AUTH_URL}/v1/${this.entity}`, user_data).subscribe(
                (res: any) => observer.next(res.data),
                error => observer.error(error)
            );
        });
    }

    public getRoles(): Observable<any> {
        return new Observable(observer => {
            this.http.get(`${environment.AUTH_URL}/v1/roles`).subscribe(
                (res: any) => observer.next(res.data),
                error => observer.error(error)
            );
        });
    }
}