import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClient {

    constructor(private http: Http) {
    }

    get(url): Observable<Response> {
        return this.http.get(url, this.getRequestOptions());
    }

    post(url, data): Observable<Response> {
        return this.http.post(url, data, this.getRequestOptions());
    }

    private getRequestOptions(): RequestOptionsArgs {
        return { headers: this.getAuthHeader() };
    }

    private getAuthHeader(): Headers {
        return new Headers({
            Accept: 'application/hal+json'
        });
    }

}
