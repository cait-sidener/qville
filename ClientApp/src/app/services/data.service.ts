import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sites } from '../models/sites';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private _url: string = "https://my-json-server.typicode.com/cait-sidener/jsontest/sites";
    constructor(private http: HttpClient) { }

    getSites(): Observable<Sites[]> {
        return this.http.get<Sites[]>(this._url);

    }
}
