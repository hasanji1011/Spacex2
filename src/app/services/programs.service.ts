import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  API_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private http: HttpClient) { }

  getPrograms(): Observable<any> {
    return this.http.get(this.API_URL).pipe(
      catchError(this.errorHandler)
    )
  }
  getFilterProgram(params): Observable<any> {
    return this.http.get(this.API_URL + params).pipe(
      catchError(this.errorHandler)
    )
  }
  private errorHandler(error: Response) {
    return throwError(
      error.status === 404 ? 'No Data Exist' : 'Unexpected Error'
    )
  }
}
