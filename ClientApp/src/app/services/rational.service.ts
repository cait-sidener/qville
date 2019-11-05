import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { Rational } from '../models/rational';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RationalService {
  private _url: string = "https://my-json-server.typicode.com/cait-sidener/sitedata/rational";
  constructor(private http: HttpClient) { }

  getSites(): Observable<Rational[]> {
      return this.http.get<Rational[]>(this._url);

  }
}
