import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getToken } from 'src/app/app.utils';

export function applicationHttpClientCreator(http: HttpClient) {
    return new ApplicationHttpClient(http);
}

@Injectable()
export class ApplicationHttpClient {

    public constructor(public http: HttpClient) { }

    private getToken(): { [key: string]: HttpHeaders } {
        const token = getToken();
        const header = token ? { 'Authorization': `Bearer ${token.token.access_token}` } : {}
        return { headers: new HttpHeaders(header) };
    }

    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(`${url}`, this.getToken());
    }

    public post<T>(url: string, params: Object): Observable<T> {
        return this.http.post<T>(`${url}`, params, this.getToken());
    }

    public put<T>(url: string, params: Object): Observable<T> {
        return this.http.put<T>(`${url}`, params, this.getToken());
    }

    public delete<T>(url: string): Observable<T> {
        return this.http.delete<T>(`${url}`, this.getToken());
    }
}