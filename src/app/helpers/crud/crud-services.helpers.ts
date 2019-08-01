import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

export class CrudServices {
    protected http: HttpClient;
    protected entity: string;

    constructor() { }

    protected createOptionsUrl(options: any, isAll?: boolean) {
        let url = '?';

        _.forEach(options, (value, key) => {
            if (!(isAll && key === 'account_id')) {
                url += `${key === 'pageSize' ? 'limit' : key}=${value}&`;
            }
        });

        return url;
    }

    public store(data): Observable<any> {
        return this.http.post(`${environment.AUTH_URL}/api/${this.entity}`, data);
    }

    public get(id: any = false): Observable<any> {
        return new Observable((observer => {
            this.http.get(`${environment.AUTH_URL}/api/${this.entity}${id ? `/${id}` : ''}`).subscribe(
                (data: any) => {
                    observer.next(data.data);
                },
                (error: any) => {
                    observer.error(error);
                }
            );
        }));
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(`${environment.AUTH_URL}/api/${this.entity}/${id}`);
    }

    public getData(options: any): Observable<any> {
        const optionsUrl = this.createOptionsUrl(options);
        return this.http.get(`${environment.AUTH_URL}/api/${this.entity}${optionsUrl}`);
    }

    public update(_data: any): Observable<any> {
        return this.http.put(`${environment.AUTH_URL}/api/${this.entity}/${_data.id}`, _data);
    }
}
