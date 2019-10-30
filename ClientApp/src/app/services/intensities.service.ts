import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Intensities } from '../models/intensities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntensitiesService {
  private _url: string = "https://my-json-server.typicode.com/cait-sidener/jsontest/intensities";
  constructor(private http: HttpClient) { }

  getSites(): Observable<Intensities[]> {
      return this.http.get<Intensities[]>(this._url);

  }
}
