import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../response/response';
import * as _ from 'lodash';

export class CrudServices<T> {
    protected http: HttpClient;
    protected entity: string;

    constructor() { }

    protected createOptionsUrl(options: {[key: string]: (number | string)}) {
        let url = '?';

        _.forEach(options, (value, key) => {
            if (key !== 'next') {
                url += `${key === 'pageSize' ? 'limit' : key}=${value}&`;
            }
        });

        return url;
    }

    public save(data: T): Observable<T> {
        return new Observable((observer) => {
            this.http.post(`${environment.AUTH_URL}/v1/${this.entity}`, data).subscribe(
                (res: Response<T>) => observer.next(res.data as T),
                error => observer.error(error)
            );
        });
    }

    public get(id: (string | number) = null): Observable<T> {
        return new Observable((observer) => {
            this.http.get(`${environment.AUTH_URL}/v1/${this.entity}${id ? `/${id}` : ''}`).subscribe(
                (res: Response<T>) => observer.next(res.data as T),
                error => observer.error(error)
            );
        });
    }

    public delete(id: (string | number)): Observable<any> {
        return new Observable((observer) => {
            this.http.put(`${environment.AUTH_URL}/v1/${this.entity}`, id).subscribe(
                () => observer.next(true),
                error => observer.error(error)
            );
        });
    }

    public getData(options: any): Observable<(T[] & any)> {
        const optionsUrl = this.createOptionsUrl(options);

        return new Observable((observer) => {
            this.http.get(`${environment.AUTH_URL}/v1/${this.entity}${optionsUrl}`).subscribe(
                (res: Response<T>) => {
                    observer.next(res)
                },
                error => observer.error(error)
            );
        });
    }

    public update(data: T & {id: string | number}): Observable<T> {
        return new Observable((observer) => {
            this.http.put(`${environment.AUTH_URL}/v1/${this.entity}/${data.id}`, data).subscribe(
                (res: Response<T>) => observer.next(res.data as T),
                error => observer.error(error)
            );
        });
    }
}
