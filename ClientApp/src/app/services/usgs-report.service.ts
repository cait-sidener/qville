import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { UsgsReport } from '../models/usgs-report';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsgsReportService {
  private _url: string = "https://my-json-server.typicode.com/cait-sidener/sitedata/usgsReport";
  constructor(private http: HttpClient) { }

  getSites(): Observable<UsgsReport[]> {
      return this.http.get<UsgsReport[]>(this._url);

  }
}
