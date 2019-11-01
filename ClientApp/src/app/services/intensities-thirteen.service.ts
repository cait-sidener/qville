import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IntensitiesThirteen } from '../models/intensities-thirteen';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntensitiesThirteenService {
  private _url: string = "https://my-json-server.typicode.com/cait-sidener/jsontest/intensities13";
  constructor(private http: HttpClient) { }

  getSites(): Observable<IntensitiesThirteen[]> {
      return this.http.get<IntensitiesThirteen[]>(this._url).pipe(
        tap(data => console.log('Data:', JSON.stringify(data))), catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
		let errorMessage = '';
		if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
		else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
		return throwError(errorMessage);
	}
}
