import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IntensitiesThirteen } from '../models/intensities-thirteen';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntensitiesThirteenService {
  private _url: string = "https://my-json-server.typicode.com/cait-sidener/jsontest/intensities13";
  constructor(private http: HttpClient) { }

  getSites(): Observable<IntensitiesThirteen[]> {
      return this.http.get<IntensitiesThirteen[]>(this._url);

  }
}
