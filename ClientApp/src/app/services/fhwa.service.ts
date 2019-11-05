import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { Fhwa } from '../models/fhwa';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FhwaService {
  private _url: string = "https://my-json-server.typicode.com/cait-sidener/sitedata/fhwa";
  constructor(private http: HttpClient) { }

  getSites(): Observable<Fhwa[]> {
      return this.http.get<Fhwa[]>(this._url);

  }
}
