import { Http }  from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class Error {
    error: string;
}

@Injectable()
export class FetchService {

    private baseUrl = "localhost:2017/";

    constructor(private http: Http) {
    }

    get<T>(url: string): Observable<T> {
        return this.http.get(this.getFullUrl(url)).map<T>(r => this.mapResult(r));
    }

    post<T>(url: string, body?: Object): Observable<T> {
        return this.http.post(this.getFullUrl(url), body ? JSON.stringify(body) : null)
        .map<T>(r => this.mapResult(r))
        .catch(err => Observable.throw(err))
    }

    remove<T>(url: string): Observable<T> {
        return this.http.delete(this.getFullUrl(url)).map<T>(r => this.mapResult(r));
    }

    private mapResult(res: any): any {
        return (<any>res)._body ? res.json() : null;
    }

    private getFullUrl(url: string): string {
        return (url.indexOf("http") === 0) ? url : this.baseUrl + url;
    }

}
