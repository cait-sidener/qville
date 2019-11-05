import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { SiteInfo } from '../models/site-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteInfoService {
  private _url: string = "https://my-json-server.typicode.com/cait-sidener/sitedata/siteInfo";
  constructor(private http: HttpClient) { }

  getSites(): Observable<SiteInfo[]> {
      return this.http.get<SiteInfo[]>(this._url);

  }
}
